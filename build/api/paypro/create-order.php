<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["ok" => false, "message" => "Method not allowed"]);
    exit();
}

// PayPro Credentials (Default from configuration)
$clientId = getenv("PAYPRO_CLIENT_ID") ?: "ClbWdIcE5bfvgKX";
$clientSecret = getenv("PAYPRO_CLIENT_SECRET") ?: "RVQU2zlPto8fz9I";
$merchantId = getenv("PAYPRO_MERCHANT_ID") ?: "Best_Welfare";
$baseUrl = rtrim(getenv("PAYPRO_BASE_URL") ?: "https://api.paypro.com.pk", "/");
$fallbackUrl = getenv("PAYPRO_HOSTED_URL") ?: "https://billing.paypro.com.pk/donation/best-nation-welfare-organization/";

// Read incoming JSON body
$rawInput = file_get_contents("php://input");
$input = json_decode($rawInput, true);

if (!$input) {
    $input = $_POST;
}

$amount = isset($input['amount']) ? (float)$input['amount'] : 0;
$donorName = trim($input['donorName'] ?? $input['name'] ?? '');
$donorEmail = trim($input['donorEmail'] ?? $input['email'] ?? '');
$donorMobile = trim($input['donorMobile'] ?? $input['mobile'] ?? $input['phone'] ?? '');
$donorAddress = trim($input['donorAddress'] ?? $input['address'] ?? $input['city'] ?? '');
$cause = trim($input['cause'] ?? 'General Donation');
$isAnonymous = !empty($input['isAnonymous']);

if ($amount < 50) {
    http_response_code(400);
    echo json_encode(["ok" => false, "message" => "Minimum donation amount is PKR 50."]);
    exit();
}

if (empty($donorName)) {
    http_response_code(400);
    echo json_encode(["ok" => false, "message" => "Donor name is required."]);
    exit();
}

if (!filter_var($donorEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["ok" => false, "message" => "A valid email address is required."]);
    exit();
}

// 1. Authenticate with PayPro
$authUrl = $baseUrl . "/v2/ppro/auth";
$authPayload = json_encode([
    "clientid" => $clientId,
    "clientsecret" => $clientSecret
]);

$ch = curl_init($authUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $authPayload);
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "clientid: " . $clientId,
    "clientsecret: " . $clientSecret
]);
curl_setopt($ch, CURLOPT_TIMEOUT, 20);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

$authResponse = curl_exec($ch);
$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$authHeaders = substr($authResponse, 0, $headerSize);
$authBody = substr($authResponse, $headerSize);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Extract token from header
$token = "";
if (preg_match('/token:\s*([^\r\n]+)/i', $authHeaders, $matches)) {
    $token = trim($matches[1]);
}

if (empty($token)) {
    $bodyJson = json_decode($authBody, true);
    if (is_array($bodyJson) && isset($bodyJson[0]['token'])) {
        $token = $bodyJson[0]['token'];
    } elseif (is_array($bodyJson) && isset($bodyJson['token'])) {
        $token = $bodyJson['token'];
    }
}

if (empty($token)) {
    http_response_code(502);
    echo json_encode([
        "ok" => false,
        "message" => "PayPro gateway authentication failed.",
        "fallbackUrl" => $fallbackUrl
    ]);
    exit();
}

// 2. Create Order in PayPro
$uniqueOrderNumber = "BNWO-" . substr((string)time(), -7) . "-" . rand(1000, 9999);
$issueDate = date("Y/m/d");
$dueDate = date("Y/m/d", strtotime("+14 days"));
$cleanMobile = preg_replace('/[^0-9]/', '', $donorMobile);
if (empty($cleanMobile)) {
    $cleanMobile = "03000000000";
}

$coPayload = [
    [
        "MerchantId" => $merchantId,
        "AutoRedirect" => "1"
    ],
    [
        "OrderNumber" => $uniqueOrderNumber,
        "OrderAmount" => (string)round($amount),
        "OrderDueDate" => $dueDate,
        "OrderType" => "Service",
        "IssueDate" => $issueDate,
        "OrderExpireAfterSeconds" => "0",
        "CustomerName" => $isAnonymous ? "Anonymous Donor" : $donorName,
        "CustomerMobile" => $cleanMobile,
        "CustomerEmail" => $donorEmail,
        "CustomerAddress" => !empty($donorAddress) ? $donorAddress : "Donation for " . $cause
    ]
];

$coUrl = $baseUrl . "/v2/ppro/co";
$ch2 = curl_init($coUrl);
curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch2, CURLOPT_POST, true);
curl_setopt($ch2, CURLOPT_POSTFIELDS, json_encode($coPayload));
curl_setopt($ch2, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "token: " . $token
]);
curl_setopt($ch2, CURLOPT_TIMEOUT, 25);
curl_setopt($ch2, CURLOPT_SSL_VERIFYPEER, true);

$coResponse = curl_exec($ch2);
$coHttpCode = curl_getinfo($ch2, CURLINFO_HTTP_CODE);
curl_close($ch2);

$coData = json_decode($coResponse, true);

if (!is_array($coData)) {
    http_response_code(502);
    echo json_encode([
        "ok" => false,
        "message" => "PayPro returned an unexpected format.",
        "fallbackUrl" => $fallbackUrl
    ]);
    exit();
}

$statusObj = isset($coData[0]) ? $coData[0] : $coData;
$detailsObj = isset($coData[1]) ? $coData[1] : $statusObj;

$status = $statusObj['Status'] ?? $detailsObj['Status'] ?? '';
$description = $statusObj['Description'] ?? $detailsObj['Description'] ?? 'Order processed';
$paymentUrl = $detailsObj['Click2Pay'] ?? $detailsObj['short_Click2Pay'] ?? $detailsObj['ConnectPayUrl'] ?? null;
$connectPayId = $detailsObj['ConnectPayId'] ?? $detailsObj['PayProId'] ?? null;
$invoiceId = $detailsObj['InvoiceId'] ?? $detailsObj['PayProId'] ?? $connectPayId;
$billUrl = $detailsObj['short_BillUrl'] ?? $detailsObj['BillUrl'] ?? null;

$isSuccess = ($status === "00" || strtolower($status) === "success" || !empty($paymentUrl));

if ($isSuccess && !empty($paymentUrl)) {
    echo json_encode([
        "ok" => true,
        "orderNumber" => $uniqueOrderNumber,
        "paymentUrl" => $paymentUrl,
        "invoiceId" => $invoiceId,
        "connectPayId" => $connectPayId,
        "billUrl" => $billUrl,
        "amount" => round($amount),
        "cause" => $cause,
        "donorName" => $isAnonymous ? "Anonymous Donor" : $donorName,
        "message" => "PayPro payment session created successfully."
    ]);
    exit();
}

http_response_code(400);
echo json_encode([
    "ok" => false,
    "status" => $status,
    "description" => $description,
    "message" => "PayPro error: " . ($description ?: $status),
    "fallbackUrl" => $fallbackUrl
]);
exit();
