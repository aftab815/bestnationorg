const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const express = require("express");
const fs = require("fs");
const nodemailer = require("nodemailer");

const app = express();
const isProduction = process.env.NODE_ENV === "production";
const port = Number(process.env.API_PORT || (isProduction ? process.env.PORT : 5000)) || 5000;

const buildDir = path.join(__dirname, "build");
const dataDir = path.join(__dirname, "data");
const subscribersFile = path.join(dataDir, "newsletter-subscribers.json");
const donationsFile = path.join(dataDir, "paypro-donations.json");
const registrationsFile = path.join(dataDir, "registrations.json");

app.use(express.json());

app.use(express.static(buildDir));

function ensureSubscribersStore() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(subscribersFile)) {
    fs.writeFileSync(subscribersFile, "[]", "utf8");
  }
}

function readSubscribers() {
  ensureSubscribersStore();
  const raw = fs.readFileSync(subscribersFile, "utf8");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

function writeSubscribers(list) {
  ensureSubscribersStore();
  fs.writeFileSync(subscribersFile, JSON.stringify(list, null, 2), "utf8");
}

function ensureDonationsStore() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(donationsFile)) {
    fs.writeFileSync(donationsFile, "[]", "utf8");
  }
}

function readDonations() {
  ensureDonationsStore();
  const raw = fs.readFileSync(donationsFile, "utf8");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

function saveDonation(record) {
  const donations = readDonations();
  donations.unshift(record);
  // Keep last 500 donations
  const trimmed = donations.slice(0, 500);
  ensureDonationsStore();
  fs.writeFileSync(donationsFile, JSON.stringify(trimmed, null, 2), "utf8");
}

function ensureRegistrationsStore() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(registrationsFile)) {
    fs.writeFileSync(registrationsFile, "[]", "utf8");
  }
}

function readRegistrations() {
  ensureRegistrationsStore();
  const raw = fs.readFileSync(registrationsFile, "utf8");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

function saveRegistration(record) {
  const registrations = readRegistrations();
  registrations.unshift(record);
  ensureRegistrationsStore();
  fs.writeFileSync(registrationsFile, JSON.stringify(registrations, null, 2), "utf8");
}

// In-memory rate limiter for registration endpoint spam protection
const registrationRateLimitMap = new Map();
const REGISTRATION_RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const REGISTRATION_MAX_REQUESTS_PER_WINDOW = 10; // Max 10 per 15 minutes per IP

function isRegistrationRateLimited(ip) {
  const now = Date.now();
  const clientData = registrationRateLimitMap.get(ip) || { count: 0, windowStart: now };
  if (now - clientData.windowStart > REGISTRATION_RATE_LIMIT_WINDOW_MS) {
    clientData.count = 1;
    clientData.windowStart = now;
    registrationRateLimitMap.set(ip, clientData);
    return false;
  }
  if (clientData.count >= REGISTRATION_MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  clientData.count += 1;
  registrationRateLimitMap.set(ip, clientData);
  return false;
}


function getPayProConfig() {
  const value = (input) => String(input || "").trim();
  const rawBase = value(process.env.PAYPRO_BASE_URL) || "https://api.paypro.com.pk";
  const baseUrl = rawBase.replace(/\/+$/, "");
  const clientId = value(process.env.PAYPRO_CLIENT_ID);
  const clientSecret = value(process.env.PAYPRO_CLIENT_SECRET);
  const merchantId = value(process.env.PAYPRO_MERCHANT_ID);
  const fallbackUrl =
    value(process.env.PAYPRO_HOSTED_URL) ||
    "https://billing.paypro.com.pk/donation/best-nation-welfare-organization/";

  const isConfigured = Boolean(clientId && clientSecret && merchantId);

  return {
    baseUrl,
    clientId,
    clientSecret,
    merchantId,
    fallbackUrl,
    isConfigured,
  };
}

async function fetchPayProAuthToken(config) {
  const authUrl = `${config.baseUrl}/v2/ppro/auth`;
  const response = await fetch(authUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      clientid: config.clientId,
      clientsecret: config.clientSecret,
    },
    body: JSON.stringify({
      clientid: config.clientId,
      clientsecret: config.clientSecret,
    }),
  });

  const headerToken = response.headers.get("token") || response.headers.get("Token");
  let bodyJson = null;
  try {
    bodyJson = await response.json();
  } catch (e) {
    // Body may be empty or non-JSON
  }

  const bodyToken = Array.isArray(bodyJson)
    ? bodyJson[0]?.token || bodyJson[0]?.Token
    : bodyJson?.token || bodyJson?.Token;

  const token = headerToken || bodyToken;

  if (!token) {
    const detail = bodyJson ? JSON.stringify(bodyJson) : `HTTP ${response.status} ${response.statusText}`;
    throw new Error(`PayPro authentication failed: ${detail}`);
  }

  return token;
}

function getMailerConfig() {
  const value = (input) => String(input || "").trim();
  return {
    host: value(process.env.SMTP_HOST) || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: value(process.env.SMTP_SECURE || "true").toLowerCase() === "true",
    user: value(process.env.SMTP_USER),
    pass: value(process.env.SMTP_PASS),
    from: value(process.env.NEWSLETTER_FROM) || value(process.env.SMTP_USER),
  };
}


/**
 * TEMPORARY REGISTRATION ENDPOINT
 * 
 * TODO: Replace this temporary file-based persistence (data/registrations.json)
 * with direct CRM backend / database integration when ready.
 */
app.post("/api/registrations", (req, res) => {
  try {
    // 1. Honeypot check for spam bots
    if (req.body?.hp_field || req.body?.hp_website || req.body?.bot_field) {
      return res.status(200).json({
        success: true,
        message: "Registration received successfully.",
        registrationId: `BNWO-MOCK-${Date.now()}`
      });
    }

    // 2. Rate limiting check
    const clientIp = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown").toString();
    if (isRegistrationRateLimited(clientIp)) {
      return res.status(429).json({
        success: false,
        error: "Too many registration attempts from this network. Please try again after 15 minutes."
      });
    }

    const { person, participations } = req.body || {};

    if (!person || typeof person !== "object") {
      return res.status(400).json({ success: false, error: "Missing personal information." });
    }

    // Server-side field extraction & sanitization
    const name = String(person.name || "").trim();
    const fatherOrHusbandName = String(person.fatherOrHusbandName || "").trim();
    const cnic = String(person.cnic || "").trim();
    const gender = String(person.gender || "").trim();
    const age = Number(person.age);
    const religion = String(person.religion || "").trim();
    const nationality = String(person.nationality || "").trim();
    const education = String(person.education || "").trim();
    const maritalStatus = String(person.maritalStatus || "").trim();
    const professionTypes = Array.isArray(person.professionTypes) ? person.professionTypes : [];
    const homeAddress = String(person.homeAddress || "").trim();
    const cell = String(person.cell || "").trim();
    const email = String(person.email || "").trim().toLowerCase();
    const location = person.location || {};

    // Validate Step 1 (Personal Info)
    if (!name) return res.status(400).json({ success: false, error: "Full name is required." });
    if (!fatherOrHusbandName) return res.status(400).json({ success: false, error: "Father / Husband name is required." });
    
    // Validate Pakistani CNIC format (12345-1234567-1)
    const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
    if (!cnicRegex.test(cnic)) {
      return res.status(400).json({ success: false, error: "CNIC must follow the 13-digit format (12345-1234567-1)." });
    }

    if (!gender) return res.status(400).json({ success: false, error: "Gender is required." });
    if (!age || isNaN(age) || age < 1 || age > 120) {
      return res.status(400).json({ success: false, error: "Valid age between 1 and 120 is required." });
    }
    if (!religion) return res.status(400).json({ success: false, error: "Religion is required." });
    if (!nationality) return res.status(400).json({ success: false, error: "Nationality is required." });
    if (!education) return res.status(400).json({ success: false, error: "Education qualification is required." });
    if (!maritalStatus) return res.status(400).json({ success: false, error: "Marital status is required." });
    if (professionTypes.length === 0) {
      return res.status(400).json({ success: false, error: "Please select at least one profession type." });
    }
    if (!homeAddress) return res.status(400).json({ success: false, error: "Home address is required." });

    // Validate Step 2 (Contact)
    const cellClean = cell.replace(/[\s-]/g, "");
    const pakCellRegex = /^(\+92|0092|0)?3[0-9]{9}$/;
    if (!pakCellRegex.test(cellClean)) {
      return res.status(400).json({ success: false, error: "A valid Pakistani cell number is required (e.g. 0300-1234567)." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: "A valid email address is required." });
    }

    // Validate Step 3 (Location)
    if (!location.country) {
      return res.status(400).json({ success: false, error: "Country is required." });
    }
    if (!location.city) {
      return res.status(400).json({ success: false, error: "City is required." });
    }

    // Validate Step 4/5 (Participations)
    if (!Array.isArray(participations) || participations.length === 0) {
      return res.status(400).json({ success: false, error: "At least one program/project entry must be specified." });
    }

    for (let i = 0; i < participations.length; i++) {
      const p = participations[i];
      if (!p.role) {
        return res.status(400).json({ success: false, error: `Participation entry #${i + 1} is missing a role.` });
      }
      if (!p.programId || !p.projectId) {
        return res.status(400).json({ success: false, error: `Participation entry #${i + 1} requires both Program and Project.` });
      }
    }

    // Construct clean record conforming exactly to the expected payload shape
    const registrationId = `BNWO-REG-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const cleanRecord = {
      id: registrationId,
      submittedAt: new Date().toISOString(),
      person: {
        name,
        fatherOrHusbandName,
        cnic,
        gender,
        age,
        religion,
        nationality,
        bloodGroup: String(person.bloodGroup || "").trim(),
        education,
        maritalStatus,
        professionTypes,
        homeAddress,
        officeAddress: String(person.officeAddress || "").trim(),
        cell,
        whatsapp: String(person.whatsapp || "").trim(),
        email,
        website: String(person.website || "").trim(),
        referralName: String(person.referralName || "").trim(),
        referralCell: String(person.referralCell || "").trim(),
        location: {
          country: String(location.country || "").trim(),
          province: String(location.province || "").trim(),
          division: String(location.division || "").trim(),
          district: String(location.district || "").trim(),
          tehsil: String(location.tehsil || "").trim(),
          uc: String(location.uc || "").trim(),
          city: String(location.city || "").trim()
        },
        areaOfInterest: String(person.areaOfInterest || "").trim(),
        hobbies: String(person.hobbies || "").trim()
      },
      participations: participations.map(p => ({
        role: String(p.role || "").trim(),
        programId: String(p.programId || "").trim(),
        projectId: String(p.projectId || "").trim(),
        contributionType: String(p.contributionType || "").trim(),
        amount: String(p.amount || "").trim(),
        hours: String(p.hours || "").trim(),
        helpNeeded: String(p.helpNeeded || "").trim(),
        beneficiaryCount: String(p.beneficiaryCount || "").trim()
      }))
    };

    saveRegistration(cleanRecord);

    return res.status(201).json({
      success: true,
      message: "Registration submitted successfully.",
      registrationId
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Internal server error occurred while processing registration."
    });
  }
});

app.post("/api/newsletter/subscribe", (req, res) => {
  const email = String(req.body?.email || "").trim().toLowerCase();
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmailValid) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  const subscribers = readSubscribers();
  const alreadyExists = subscribers.some((entry) => entry.email === email);

  if (alreadyExists) {
    return res.status(200).json({ message: "This email is already subscribed." });
  }

  subscribers.push({
    email,
    subscribedAt: new Date().toISOString(),
  });

  writeSubscribers(subscribers);

  return res.status(201).json({ message: "Thanks for subscribing to BNWO updates." });
});

app.get("/api/newsletter/stats", (req, res) => {
  const count = readSubscribers().length;
  return res.json({ count });
});

app.post("/api/newsletter/broadcast", async (req, res) => {
  const adminKey = String(req.body?.adminKey || "");
  const subject = String(req.body?.subject || "").trim();
  const message = String(req.body?.message || "").trim();
  const expectedKey = String(process.env.NEWSLETTER_ADMIN_KEY || "");

  if (!expectedKey) {
    return res.status(500).json({ message: "Server admin key is not configured." });
  }
  if (adminKey !== expectedKey) {
    return res.status(401).json({ message: "Invalid admin key." });
  }
  if (!subject || !message) {
    return res.status(400).json({ message: "Subject and message are required." });
  }

  const subscribers = readSubscribers();
  const recipients = subscribers.map((s) => s.email).filter(Boolean);
  if (!recipients.length) {
    return res.status(400).json({ message: "No subscribed emails found." });
  }

  const mailer = getMailerConfig();
  if (!mailer.user || !mailer.pass || !mailer.from) {
    const missing = [];
    if (!mailer.user) missing.push("SMTP_USER");
    if (!mailer.pass) missing.push("SMTP_PASS");
    if (!mailer.from) missing.push("NEWSLETTER_FROM");
    return res.status(500).json({
      message: `SMTP configuration is incomplete. Missing: ${missing.join(", ")}`,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: mailer.host,
      port: mailer.port,
      secure: mailer.secure,
      auth: {
        user: mailer.user,
        pass: mailer.pass,
      },
    });

    await transporter.verify();

    let accepted = 0;
    let rejected = 0;
    const failedRecipients = [];

    for (const recipient of recipients) {
      try {
        const info = await transporter.sendMail({
          from: mailer.from,
          to: recipient,
          subject: `[BNWO] ${subject}`,
          text: message,
          html: `
            <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937;">
              <h2 style="margin-bottom:8px;color:#0f3460;">Best Nation Welfare Organization</h2>
              <p style="white-space:pre-line;">${message}</p>
            </div>
          `,
        });

        const wasAccepted = Array.isArray(info.accepted) && info.accepted.length > 0;
        if (wasAccepted) {
          accepted += 1;
        } else {
          rejected += 1;
          failedRecipients.push(recipient);
        }
      } catch (err) {
        rejected += 1;
        failedRecipients.push(recipient);
      }
    }

    if (accepted === 0) {
      return res.status(502).json({
        message:
          "No email was accepted by SMTP. Check cPanel outgoing limits, SPF/DKIM, and mailbox password.",
      });
    }

    if (rejected > 0) {
      return res.status(207).json({
        message: `Partially sent. Accepted: ${accepted}, Rejected: ${rejected}. Failed: ${failedRecipients.join(", ")}`,
      });
    }

    return res.json({ message: `Email delivered to SMTP for ${accepted} subscribers.` });
  } catch (error) {
    console.error("Newsletter broadcast failed:", error.message);
    return res.status(500).json({
      message: "SMTP connection failed. Verify host/port/security/user/pass and cPanel outbound mail settings.",
    });
  }
});

// ── PAYPRO INTEGRATION API ───────────────────────────────────────────────────

// 1. Check PayPro status & configuration (safe public metadata)
app.get("/api/paypro/status", (req, res) => {
  const config = getPayProConfig();
  return res.json({
    configured: config.isConfigured,
    hasClientId: Boolean(config.clientId),
    hasClientSecret: Boolean(config.clientSecret),
    hasMerchantId: Boolean(config.merchantId),
    baseUrl: config.baseUrl,
    fallbackUrl: config.fallbackUrl,
  });
});

// 2. Direct PayPro Order Creation & Token Fetching
app.post("/api/paypro/create-order", async (req, res) => {
  try {
    const config = getPayProConfig();

    const amountNum = Number(req.body?.amount);
    const donorName = String(req.body?.donorName || req.body?.name || "").trim();
    const donorEmail = String(req.body?.donorEmail || req.body?.email || "").trim().toLowerCase();
    const donorMobile = String(req.body?.donorMobile || req.body?.mobile || req.body?.phone || "").trim();
    const donorAddress = String(req.body?.donorAddress || req.body?.address || req.body?.city || "").trim();
    const cause = String(req.body?.cause || "General Donation").trim();
    const isAnonymous = Boolean(req.body?.isAnonymous);
    const notes = String(req.body?.notes || "").trim();

    // Validation
    if (!amountNum || isNaN(amountNum) || amountNum < 50) {
      return res.status(400).json({
        ok: false,
        message: "Please enter a valid donation amount (minimum PKR 50).",
      });
    }

    if (!donorName) {
      return res.status(400).json({
        ok: false,
        message: "Donor name is required.",
      });
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorEmail);
    if (!isEmailValid) {
      return res.status(400).json({
        ok: false,
        message: "A valid email address is required for payment confirmation.",
      });
    }

    // Check if credentials are ready
    if (!config.isConfigured) {
      return res.status(200).json({
        ok: false,
        configured: false,
        message:
          "PayPro credentials (PAYPRO_CLIENT_ID, PAYPRO_CLIENT_SECRET, PAYPRO_MERCHANT_ID) are not configured in .env yet.",
        fallbackUrl: config.fallbackUrl,
      });
    }

    // 1. Authenticate with PayPro to obtain Bearer/Auth Token
    let token;
    try {
      token = await fetchPayProAuthToken(config);
    } catch (authErr) {
      console.error("PayPro auth error:", authErr.message);
      return res.status(502).json({
        ok: false,
        message: `PayPro gateway authentication failed: ${authErr.message}`,
        fallbackUrl: config.fallbackUrl,
      });
    }

    // 2. Format Order Details
    const uniqueOrderNumber = `BNWO-${Date.now().toString().slice(-7)}-${Math.floor(1000 + Math.random() * 9000)}`;

    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const formatDate = (d) => `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())}`;
    const issueDate = formatDate(now);
    const dueDate = formatDate(new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000)); // 14 days validity

    const cleanMobile = donorMobile.replace(/[^0-9]/g, "") || "03000000000";

    const payload = [
      {
        MerchantId: config.merchantId,
        AutoRedirect: "1",
      },
      {
        OrderNumber: uniqueOrderNumber,
        OrderAmount: String(Math.round(amountNum)),
        OrderDueDate: dueDate,
        OrderType: "Service",
        IssueDate: issueDate,
        OrderExpireAfterSeconds: "0",
        CustomerName: isAnonymous ? "Anonymous Donor" : donorName,
        CustomerMobile: cleanMobile,
        CustomerEmail: donorEmail,
        CustomerAddress: donorAddress || (cause ? `Donation for ${cause}` : "Pakistan"),
      },
    ];

    // 3. Send Create Order request to PayPro
    const coUrl = `${config.baseUrl}/v2/ppro/co`;
    const coResponse = await fetch(coUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify(payload),
    });

    const coRaw = await coResponse.text();
    let coData;
    try {
      coData = JSON.parse(coRaw);
    } catch (parseErr) {
      console.error("PayPro CO returned non-JSON:", coRaw);
      return res.status(502).json({
        ok: false,
        message: "PayPro returned an unexpected response format.",
        raw: coRaw.slice(0, 300),
        fallbackUrl: config.fallbackUrl,
      });
    }

    // PayPro v2 response structure:
    // [ { Status: "00" }, { Click2Pay: "...", short_Click2Pay: "...", PayProId: "...", ConnectPayId: "..." } ]
    const statusObj = Array.isArray(coData) ? coData[0] : coData;
    const detailsObj = Array.isArray(coData) && coData.length > 1 ? coData[1] : statusObj;

    const status = String(statusObj?.Status || detailsObj?.Status || "");
    const description = statusObj?.Description || detailsObj?.Description || "Order processed";
    const paymentUrl =
      detailsObj?.Click2Pay ||
      detailsObj?.short_Click2Pay ||
      detailsObj?.ConnectPayUrl ||
      detailsObj?.IframeClick2Pay ||
      statusObj?.Click2Pay ||
      null;
    const connectPayId =
      detailsObj?.ConnectPayId ||
      detailsObj?.PayProId ||
      statusObj?.ConnectPayId ||
      null;
    const invoiceId = detailsObj?.InvoiceId || detailsObj?.PayProId || connectPayId;
    const billUrl = detailsObj?.short_BillUrl || detailsObj?.BillUrl || null;

    const isSuccess =
      status === "00" ||
      status.toLowerCase() === "success" ||
      Boolean(paymentUrl);

    // Save transaction draft
    const donationRecord = {
      orderNumber: uniqueOrderNumber,
      amount: Math.round(amountNum),
      donorName: isAnonymous ? "Anonymous Donor" : donorName,
      donorEmail,
      donorMobile: cleanMobile,
      cause,
      notes,
      invoiceId,
      connectPayId,
      billUrl,
      status: isSuccess ? "PENDING_PAYMENT" : `FAILED_${status}`,
      payproStatus: status,
      paymentUrl,
      createdAt: new Date().toISOString(),
    };
    saveDonation(donationRecord);

    if (isSuccess && paymentUrl) {
      return res.status(200).json({
        ok: true,
        orderNumber: uniqueOrderNumber,
        paymentUrl,
        invoiceId,
        connectPayId,
        billUrl,
        amount: Math.round(amountNum),
        cause,
        donorName: isAnonymous ? "Anonymous Donor" : donorName,
        message: "PayPro payment session created successfully.",
      });
    }

    // If order was created but no direct Click2Pay link was returned
    if (isSuccess) {
      return res.status(200).json({
        ok: true,
        orderNumber: uniqueOrderNumber,
        paymentUrl: config.fallbackUrl,
        invoiceId,
        connectPayId,
        billUrl,
        amount: Math.round(amountNum),
        cause,
        message: "PayPro invoice generated with 1Bill reference.",
      });
    }

    return res.status(400).json({
      ok: false,
      status,
      description,
      message: `PayPro gateway error: ${description || status}`,
      fallbackUrl: config.fallbackUrl,
      raw: item,
    });
  } catch (error) {
    console.error("PayPro create-order error:", error);
    const config = getPayProConfig();
    return res.status(500).json({
      ok: false,
      message: error.message || "Internal server error while communicating with PayPro gateway.",
      fallbackUrl: config.fallbackUrl,
    });
  }
});

// 3. PayPro Webhook / IPN Callback
app.post(["/api/paypro/webhook", "/api/paypro/callback"], (req, res) => {
  try {
    const body = req.body;
    console.log("PayPro IPN Received:", JSON.stringify(body));

    const orderNumber = body?.OrderNumber || body?.orderNumber || body?.order_number;
    const status = body?.Status || body?.status || "PAID";

    if (orderNumber) {
      const donations = readDonations();
      const match = donations.find((d) => d.orderNumber === orderNumber);
      if (match) {
        match.status = status;
        match.paidAt = new Date().toISOString();
        match.webhookData = body;
        ensureDonationsStore();
        fs.writeFileSync(donationsFile, JSON.stringify(donations, null, 2), "utf8");
      }
    }

    return res.json({ status: "ACKNOWLEDGED", timestamp: new Date().toISOString() });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return res.status(200).json({ status: "PROCESSED_WITH_WARNING" });
  }
});

// 4. Recent donation records (for admin verification)
app.get("/api/paypro/recent", (req, res) => {
  const adminKey = String(req.query?.adminKey || "");
  const expectedKey = String(process.env.NEWSLETTER_ADMIN_KEY || "");

  if (expectedKey && adminKey !== expectedKey) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const donations = readDonations();
  return res.json({ count: donations.length, donations: donations.slice(0, 50) });
});

if (isProduction) {
  app.use(express.static(buildDir));

  // SPA fallback (React Router)
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildDir, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.json({ ok: true, service: "BNWO API server running" });
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port} (${isProduction ? "production" : "development"})`);
});