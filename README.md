# INFERNO MACH Website

This is the official website for INFERNO MACH, showcasing our AI-powered engineering solutions.

## Deployment Options

### Netlify Deployment Instructions

1. **Sign up for Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up for a free account

2. **Deploy the site**:
   - Click "New site from Git" or "Add new site"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Select this repository
   - Configure the build settings:
     - Build command: `echo 'No build command needed for static site'`
     - Publish directory: `.` (current directory)
   - Click "Deploy site"

3. **Alternative drag-and-drop deployment**:
   - Zip the entire contents of this folder
   - Go to your Netlify dashboard
   - Drag and drop the zip file to the deployment area

### Features

- Responsive design that works on all devices
- Interactive 3D viewer powered by Spline
- Complete contact form with validation
- Case studies with downloadable PDF
- Social media integration

### Contact Form Setup

To make the contact form fully functional:

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form and get your unique form ID
3. Update the form action in `index.html`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Custom Domain (Optional)

To use a custom domain:
1. Go to your Netlify site settings
2. Navigate to "Domain management"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Local Development

To run the site locally:
```bash
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.