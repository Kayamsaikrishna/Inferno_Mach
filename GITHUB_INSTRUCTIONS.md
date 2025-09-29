# GitHub Setup Instructions

Follow these steps to set up your GitHub repository:

## 1. Create a New Repository on GitHub

1. Go to https://github.com/new
2. Name your repository: `Inferno_Mach`
3. Make it Public
4. **Do NOT initialize with a README** (we'll push the existing code)
5. Click "Create repository"

## 2. Connect Your Local Repository to GitHub

After creating the repository, run these commands in your terminal:

```bash
cd "d:\KAYAM_SAI_KRISHNA\InfernoMach\website"
git remote add origin https://github.com/Kayamsaikrishna/Inferno_Mach.git
git branch -M main
git push -u origin main
```

## 3. GitHub Pages Setup (Optional but Recommended)

To host your website for free using GitHub Pages:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Your website will be available at: https://Kayamsaikrishna.github.io/Inferno_Mach/

## 4. Updating Your Website

To update your website in the future:

1. Make changes to your files
2. Add and commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```

Your website will automatically update if you're using GitHub Pages.