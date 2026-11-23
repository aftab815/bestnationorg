<?php

function paypro_env(string $name): ?string
{
    $value = getenv($name);
    if ($value !== false && trim($value) !== '') {
        return trim($value);
    }

    static $values = null;
    if ($values === null) {
        $values = paypro_read_env_file();
    }

    return array_key_exists($name, $values) ? $values[$name] : null;
}

function paypro_read_env_file(): array
{
    $path = getenv('BNWO_ENV_FILE');
    if ($path === false || trim($path) === '') {
        $documentRoot = isset($_SERVER['DOCUMENT_ROOT']) ? (string) $_SERVER['DOCUMENT_ROOT'] : '';
        if ($documentRoot === '') {
            return [];
        }
        $path = dirname($documentRoot) . DIRECTORY_SEPARATOR . '.env';
    }

    $realPath = realpath($path);
    if ($realPath === false || !is_file($realPath) || !is_readable($realPath)) {
        return [];
    }

    $documentRoot = isset($_SERVER['DOCUMENT_ROOT']) ? (string) $_SERVER['DOCUMENT_ROOT'] : '';
    if ($documentRoot !== '') {
        $realRoot = realpath($documentRoot);
        if ($realRoot !== false) {
            $root = rtrim(str_replace('\\', '/', $realRoot), '/');
            $file = str_replace('\\', '/', $realPath);
            if ($file === $root || strpos($file, $root . '/') === 0) {
                return [];
            }
        }
    }

    $lines = file($realPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return [];
    }

    $values = [];
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#') {
            continue;
        }
        $separator = strpos($line, '=');
        if ($separator === false) {
            continue;
        }
        $key = trim(substr($line, 0, $separator));
        if ($key === '' || !preg_match('/^[A-Za-z_][A-Za-z0-9_]*$/', $key)) {
            continue;
        }
        $value = trim(substr($line, $separator + 1));
        $length = strlen($value);
        if ($length >= 2) {
            $first = $value[0];
            $last = $value[$length - 1];
            if (($first === '"' && $last === '"') || ($first === "'" && $last === "'")) {
                $value = substr($value, 1, $length - 2);
            }
        }
        $values[$key] = $value;
    }

    return $values;
}
