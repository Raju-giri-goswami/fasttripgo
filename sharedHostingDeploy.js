/**
 * SharedHostingDeploy.js
 * This script prepares your Vite/React app for deployment on shared hosting
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  distDir: path.resolve(__dirname, 'dist'),
  publicDir: path.resolve(__dirname, 'public'),
  // Files to copy from public to dist
  filesToCopy: [
    'assets/js/es-module-shims.js',
    'index-production.html',
    'fallback.html',
    'phpinfo.php'
  ]
};

// Ensure directories exist
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Create htaccess file for shared hosting
function createHtaccess() {
  const content = `# Shared hosting .htaccess for React SPA
DirectoryIndex index.html

# Enable rewrite engine
RewriteEngine On
RewriteBase /

# Set MIME types correctly
AddType text/css .css
AddType application/javascript .js
AddType application/json .json
AddType text/html .html

# Serve static files directly
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Handle SPA routes: redirect to index.html
RewriteRule ^ index.html [L]

# Cache control
<FilesMatch "\.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$">
  Header set Cache-Control "max-age=31536000"
</FilesMatch>

<FilesMatch "index\.html$">
  Header set Cache-Control "no-cache, no-store, must-revalidate"
  Header set Pragma "no-cache"
  Header set Expires 0
</FilesMatch>

# Security headers
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
`;
  fs.writeFileSync(path.join(config.distDir, '.htaccess'), content);
  console.log('✅ Created .htaccess file');
}

// Create a server check file
function createServerCheck() {
  const content = `<?php
header('Content-Type: text/plain');
echo "FastTripGo Server Check\n";
echo "=====================\n\n";

// PHP & Server Info
echo "PHP Version: " . phpversion() . "\n";
echo "Server Software: " . $_SERVER['SERVER_SOFTWARE'] . "\n\n";

// Check Apache modules (if using Apache)
if (function_exists('apache_get_modules')) {
  $modules = apache_get_modules();
  echo "mod_rewrite: " . (in_array('mod_rewrite', $modules) ? "✓" : "×") . "\n";
  echo "mod_headers: " . (in_array('mod_headers', $modules) ? "✓" : "×") . "\n\n";
} else {
  echo "Cannot check Apache modules - function not available\n\n";
}

// Check MIME types
$types = [
  'css' => 'text/css',
  'js' => 'application/javascript',
  'json' => 'application/json'
];

echo "MIME Type Checks:\n";
echo "---------------\n";

// Create test files and check MIME types
foreach ($types as $ext => $expected) {
  $file = "test-mime.$ext";
  file_put_contents($file, "Test content");
  
  $mime = function_exists('mime_content_type') 
    ? mime_content_type($file) 
    : "mime_content_type() not available";
  
  echo "$ext file: Expected $expected, Got $mime " . 
    (($mime == $expected) ? "✓" : "×") . "\n";
  
  // Clean up test file
  unlink($file);
}

echo "\nFile/Directory Permissions:\n";
echo "-------------------------\n";

// Check permissions of important files
$items = [
  '.' => 'Directory',
  './index.html' => 'File',
  './assets' => 'Directory',
  './.htaccess' => 'File'
];

foreach ($items as $item => $type) {
  if (file_exists($item)) {
    $perms = fileperms($item);
    $octalPerms = substr(sprintf('%o', $perms), -4);
    echo "$type '$item': $octalPerms " . 
      (($type == 'Directory' && $octalPerms == '0755') || 
       ($type == 'File' && $octalPerms == '0644') ? "✓" : "×") . "\n";
  } else {
    echo "$type '$item': Not found ×\n";
  }
}

// Production environment check
$isProduction = !empty($_SERVER['HTTP_HOST']) && 
  strpos($_SERVER['HTTP_HOST'], 'localhost') === false && 
  strpos($_SERVER['HTTP_HOST'], '.local') === false;

echo "\nEnvironment: " . ($isProduction ? "Production" : "Development") . "\n";
?>`;
  fs.writeFileSync(path.join(config.distDir, 'server-check.php'), content);
  console.log('✅ Created server-check.php file');
}

// Rename the built index.html
function updateIndexHtml() {
  // Read the production index file
  try {
    const productionIndexPath = path.join(config.publicDir, 'index-production.html');
    if (fs.existsSync(productionIndexPath)) {
      const content = fs.readFileSync(productionIndexPath, 'utf8');
      fs.writeFileSync(path.join(config.distDir, 'index.html'), content);
      console.log('✅ Updated index.html with production version');
    }
  } catch (error) {
    console.error('⚠️ Error updating index.html:', error);
  }
}

// Copy needed files from public to dist
function copyPublicFiles() {
  for (const file of config.filesToCopy) {
    try {
      const sourcePath = path.join(config.publicDir, file);
      const targetPath = path.join(config.distDir, file);
      
      // Make sure the target directory exists
      const targetDir = path.dirname(targetPath);
      ensureDirectoryExists(targetDir);
      
      // Copy the file if it exists
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`✅ Copied ${file}`);
      } else {
        console.warn(`⚠️ Source file not found: ${file}`);
      }
    } catch (error) {
      console.error(`⚠️ Error copying ${file}:`, error);
    }
  }
}

// Execute all tasks
function main() {
  console.log('🚀 Preparing for shared hosting deployment...');
  
  // Make sure dist directory exists
  ensureDirectoryExists(config.distDir);
  
  // Create needed files
  createHtaccess();
  createServerCheck();
  updateIndexHtml();
  copyPublicFiles();
  
  console.log('\n✨ Deployment preparation complete!');
  console.log('\nNext steps:');
  console.log('1. Upload all files from the "dist" folder to your hosting server');
  console.log('2. Visit yourdomain.com/server-check.php to verify your setup');
}

// Run the script
main();
