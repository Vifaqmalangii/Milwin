# Milwin Game - Deployment Guide

## Netlify Deployment

### Prerequisites
- Node.js 18+ installed
- Git repository set up
- Netlify account

### Local Testing Before Deployment
```bash
npm run build
npm run start
```

### Deployment Steps

#### 1. Connect to Netlify
```bash
# Option A: Using Netlify CLI
npm install -g netlify-cli
netlify init
netlify deploy

# Option B: Connect GitHub to Netlify
# - Push code to GitHub
# - Go to https://app.netlify.com
# - Click "New site from Git"
# - Select your repository
# - Netlify auto-detects Next.js and uses default settings
```

#### 2. Environment Variables (in Netlify Dashboard)
Set these in Netlify Site Settings > Build & Deploy > Environment:

```
REACT_APP_SERVER_ADDRESS=<your-backend-api-url>
NEXT_PUBLIC_APP_URL=<your-production-domain>
```

#### 3. Build Settings (already configured in netlify.toml)
- **Build command:** `npm run build`
- **Publish directory:** `out`

### Important Notes

1. **API Configuration**: Update `REACT_APP_SERVER_ADDRESS` to point to your production backend API
2. **Domain**: After deployment, update `NEXT_PUBLIC_APP_URL` to match your Netlify domain or custom domain
3. **Database**: Ensure your backend API is accessible from Netlify servers
4. **CORS**: If API is different domain, configure CORS properly in your backend

### Verification Checklist

- ✅ All pages load correctly
- ✅ Navigation links work (navbar shows all 8 links on desktop)
- ✅ Forms submit without errors
- ✅ Images load properly
- ✅ No console errors
- ✅ Mobile responsive design works

### Troubleshooting

**Build fails:**
- Check Node.js version is 18+
- Run `npm install` to ensure dependencies
- Check netlify.toml is in root directory

**Pages not loading:**
- Verify environment variables in Netlify dashboard
- Check API endpoint is accessible
- Review Netlify build logs for errors

**Images not showing:**
- Ensure public/ folder is included in git
- Check image paths are relative (start with `/`)

## Quick Deploy Command

```bash
# Clone, install, and test locally
git clone <repo-url>
cd milwin
npm install
npm run build

# Deploy to Netlify
netlify deploy --prod
```
