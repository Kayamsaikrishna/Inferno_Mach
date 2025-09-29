# Netlify Deployment Instructions

## Deploying Your INFERNO MACH Website to Netlify

Follow these simple steps to deploy your website to Netlify:

### Step 1: Sign up for Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" and create a free account

### Step 2: Deploy from GitHub
1. Click "Add new site" → "Import an existing project"
2. Connect to GitHub (authorize Netlify to access your repositories)
3. Select your "Inferno_Mach" repository
4. Configure deployment settings:
   - Branch to deploy: `main`
   - Build command: `echo 'No build command needed for static site'`
   - Publish directory: `.` (current directory)
5. Click "Deploy site"

### Step 3: Configure Redirects (Important for SPA)
After deployment is complete:
1. Go to your site settings in Netlify
2. Navigate to "Redirects and proxies"
3. Add the following redirect rule:
   ```
   /*    /index.html   200
   ```

### Step 4: Custom Domain (Optional)
1. In your site settings, go to "Domain management"
2. Add your custom domain
3. Follow the DNS configuration instructions

## Troubleshooting

### If your logo still doesn't appear:
- Make sure the logo file is in the `assets` folder
- Check that all HTML files reference the logo with the correct path: `assets/InfernoMach_Company_Logo.png`

### If contact form doesn't work:
- Sign up at [formspree.io](https://formspree.io/)
- Create a new form and get your form ID
- Update the form action in index.html to: `action="https://formspree.io/f/YOUR_FORM_ID"`

Your website should now be live at a URL like: `https://your-site-name.netlify.app`