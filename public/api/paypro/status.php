<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$clientId = getenv("PAYPRO_CLIENT_ID") ?: "";
$clientSecret = getenv("PAYPRO_CLIENT_SECRET") ?: "";
$merchantId = getenv("PAYPRO_MERCHANT_ID") ?: "";
$baseUrl = rtrim(getenv("PAYPRO_BASE_URL") ?: "https://api.paypro.com.pk", "/");
$fallbackUrl = getenv("PAYPRO_HOSTED_URL") ?: "https://billing.paypro.com.pk/donation/best-nation-welfare-organization/";

$isConfigured = !empty($clientId) && !empty($clientSecret) && !empty($merchantId);

echo json_encode([
    "configured" => $isConfigured,
    "hasClientId" => !empty($clientId),
    "hasClientSecret" => !empty($clientSecret),
    "hasMerchantId" => !empty($merchantId),
    "baseUrl" => $baseUrl,
    "fallbackUrl" => $fallbackUrl,
    "engine" => "cPanel PHP"
]);
exit();
