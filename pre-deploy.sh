#!/bin/bash
# Netlify Pre-Deployment Checklist

echo "🚀 Milwin Game - Pre-Deployment Checklist"
echo "=========================================="
echo ""

# Check Node version
echo "✓ Checking Node.js version..."
node_version=$(node -v)
echo "  Node version: $node_version"
echo ""

# Check npm version
echo "✓ Checking npm version..."
npm_version=$(npm -v)
echo "  npm version: $npm_version"
echo ""

# Check dependencies
echo "✓ Checking dependencies..."
if [ -d "node_modules" ]; then
  echo "  ✓ node_modules directory exists"
else
  echo "  ⚠ node_modules not found - running npm install..."
  npm install
fi
echo ""

# Build check
echo "✓ Running production build..."
npm run build
BUILD_STATUS=$?
echo ""

if [ $BUILD_STATUS -eq 0 ]; then
  echo "✅ Build successful!"
  echo ""
  echo "📋 Pre-Deployment Checklist:"
  echo "  ☐ Update REACT_APP_SERVER_ADDRESS in Netlify environment variables"
  echo "  ☐ Set NEXT_PUBLIC_APP_URL to your production domain"
  echo "  ☐ Verify all environment variables are set in Netlify dashboard"
  echo "  ☐ Test API connectivity from your backend"
  echo "  ☐ Review netlify.toml configuration"
  echo "  ☐ Commit all changes to git"
  echo ""
  echo "🚀 Ready to deploy:"
  echo "  netlify deploy --prod"
  echo ""
else
  echo "❌ Build failed!"
  echo "Please fix the errors above before deploying."
  exit 1
fi
