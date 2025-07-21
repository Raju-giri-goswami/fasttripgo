<?php
header('Content-Type: text/plain');

$mimeTypes = [
    'css' => 'text/css',
    'js' => 'application/javascript',
    'json' => 'application/json',
    'html' => 'text/html',
    'svg' => 'image/svg+xml'
];

foreach ($mimeTypes as $ext => $mime) {
    $testFile = "test.$ext";
    $actualMime = mime_content_type($testFile);
    echo "$ext file: Expected $mime, Got $actualMime\n";
}

// Check if mod_headers is enabled
if (in_array('mod_headers', apache_get_modules())) {
    echo "mod_headers is enabled\n";
} else {
    echo "mod_headers is NOT enabled\n";
}

// Check if mod_rewrite is enabled
if (in_array('mod_rewrite', apache_get_modules())) {
    echo "mod_rewrite is enabled\n";
} else {
    echo "mod_rewrite is NOT enabled\n";
}
?>
