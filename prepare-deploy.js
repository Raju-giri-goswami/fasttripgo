#!/usr/bin/env node

/**
 * This script prepares the build for shared hosting
 * Run after `npm run build`
 */
const fs = require('fs');
const path = require('path');

// Paths
const distDir = path.resolve(__dirname, 'dist');

// Create .htaccess file for shared hosting
const htaccessContent = `# Enable rewrite engine
DirectoryIndex index.html
RewriteEngine On

# Serve files directly if they exist
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Set correct MIME types
AddType text/css .css
AddType application/javascript .js
AddType application/json .json
AddType text/html .html

# Redirect all other URLs to index.html
RewriteRule ^ index.html [L]

# Cache control
<FilesMatch "\\.(css|js|json|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$">
  <IfModule mod_headers.c>
    Header set Cache-Control "max-age=31536000"
  </IfModule>
</FilesMatch>

<FilesMatch "index\\.html$">
  <IfModule mod_headers.c>
    Header set Cache-Control "no-cache, no-store, must-revalidate"
  </IfModule>
</FilesMatch>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
</IfModule>
`;

fs.writeFileSync(path.join(distDir, '.htaccess'), htaccessContent);
console.log('✅ Created .htaccess file');

// Create a verification file
const verifyContent = `<?php
// Test MIME types
header("Content-Type: text/plain");

echo "FastTripGo Deployment Verification\n";
echo "=================================\n\n";
echo "Date: " . date("Y-m-d H:i:s") . "\n\n";

echo "PHP version: " . phpversion() . "\n\n";

// Check for mod_rewrite
echo "Apache modules:\n";
$modules = apache_get_modules();
echo "mod_rewrite: " . (in_array('mod_rewrite', $modules) ? "Enabled" : "Not enabled") . "\n";
echo "mod_headers: " . (in_array('mod_headers', $modules) ? "Enabled" : "Not enabled") . "\n\n";

// Create test files
$extensions = ['css', 'js', 'json'];
foreach ($extensions as $ext) {
    $filename = "test.$ext";
    file_put_contents($filename, "Test file for $ext MIME type");
    echo "$ext MIME type: " . mime_content_type($filename) . "\n";
}

// Check server variables
echo "\nServer variables:\n";
echo "REQUEST_URI: " . $_SERVER['REQUEST_URI'] . "\n";
echo "SCRIPT_NAME: " . $_SERVER['SCRIPT_NAME'] . "\n";
echo "DOCUMENT_ROOT: " . $_SERVER['DOCUMENT_ROOT'] . "\n";
echo "SERVER_SOFTWARE: " . $_SERVER['SERVER_SOFTWARE'] . "\n";
?>`;

fs.writeFileSync(path.join(distDir, 'verify.php'), verifyContent);
console.log('✅ Created verification file');

// Create a fallback index.html for troubleshooting
const fallbackContent = `<!DOCTYPE html>
<html>
<head>
    <title>Loading FastTripGo...</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: sans-serif; text-align: center; padding: 20px; }
        .loading { margin-top: 50px; }
        .spinner { border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; margin: 20px auto; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
</head>
<body>
    <h1>FastTripGo</h1>
    <div class="loading">
        <p>Loading application...</p>
        <div class="spinner"></div>
    </div>
    <script>
        // Redirect after a brief delay
        setTimeout(() => {
            window.location.href = '/index.html';
        }, 2000);
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'loading.html'), fallbackContent);
console.log('✅ Created loading page');

console.log('\n✨ Files prepared for shared hosting deployment!');
console.log('1. Upload all files to your host');
console.log('2. Access verify.php to check your server configuration');
