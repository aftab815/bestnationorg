<?php
require_once __DIR__ . '/env.php';
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$clientId = paypro_env("PAYPRO_CLIENT_ID");
$clientSecret = paypro_env("PAYPRO_CLIENT_SECRET");
$merchantId = paypro_env("PAYPRO_MERCHANT_ID");
$baseUrl = rtrim(paypro_env("PAYPRO_BASE_URL") ?: "https://api.paypro.com.pk", "/");
$fallbackUrl = paypro_env("PAYPRO_HOSTED_URL") ?: "https://billing.paypro.com.pk/donation/best-nation-welfare-organization/";

echo json_encode([
    "configured" => (!empty($clientId) && !empty($clientSecret) && !empty($merchantId)),
    "hasClientId" => !empty($clientId),
    "hasClientSecret" => !empty($clientSecret),
    "hasMerchantId" => !empty($merchantId),
    "baseUrl" => $baseUrl,
    "fallbackUrl" => $fallbackUrl,
    "engine" => "cPanel PHP"
]);
exit();
