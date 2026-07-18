const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const express = require("express");
const fs = require("fs");
const nodemailer = require("nodemailer");

const app = express();
const port = Number(process.env.PORT) || 5000;
const isProduction = process.env.NODE_ENV === "production";

const buildDir = path.join(__dirname, "build");
const dataDir = path.join(__dirname, "data");
const subscribersFile = path.join(dataDir, "newsletter-subscribers.json");

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