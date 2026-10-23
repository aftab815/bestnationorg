<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$clientId = getenv("PAYPRO_CLIENT_ID") ?: "ClbWdIcE5bfvgKX";
$clientSecret = getenv("PAYPRO_CLIENT_SECRET") ?: "RVQU2zlPto8fz9I";
$merchantId = getenv("PAYPRO_MERCHANT_ID") ?: "Best_Welfare";
$baseUrl = rtrim(getenv("PAYPRO_BASE_URL") ?: "https://api.paypro.com.pk", "/");
$fallbackUrl = getenv("PAYPRO_HOSTED_URL") ?: "https://billing.paypro.com.pk/donation/best-nation-welfare-organization/";

echo json_encode([
    "configured" => true,
    "hasClientId" => !empty($clientId),
    "hasClientSecret" => !empty($clientSecret),
    "hasMerchantId" => !empty($merchantId),
    "baseUrl" => $baseUrl,
    "fallbackUrl" => $fallbackUrl,
    "engine" => "cPanel PHP"
]);
exit();
