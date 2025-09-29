@echo off
echo INFERNO MACH - GitHub Deployment Script
echo ======================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Git is not installed on this system.
    echo Please install Git from https://git-scm.com/ and run this script again.
    echo.
    pause
    exit /b 1
)

echo Git is installed. Proceeding with deployment...
echo.

REM Navigate to the website directory
cd /d "d:\KAYAM_SAI_KRISHNA\InfernoMach\website"

echo Setting up Git configuration...
git config --global user.email "kayamsaikrishna@gmail.com"
git config --global user.name "Kayam Sai Krishna"
echo.

echo Initializing repository (if not already done)...
git init
echo.

echo Adding all files...
git add .
echo.

echo Creating commit...
git commit -m "Initial commit: Complete INFERNO MACH website with AI solutions showcase"
echo.

echo.
echo === DEPLOYMENT INSTRUCTIONS ===
echo.
echo To complete deployment, you need to:
echo 1. Create a new repository on GitHub at https://github.com/new
echo 2. Name it "Inferno_Mach" (exact spelling)
echo 3. Make it Public
echo 4. DO NOT initialize with a README
echo 5. Click "Create repository"
echo.
echo After creating the repository, run these commands:
echo    git remote add origin https://github.com/YOUR_USERNAME/Inferno_Mach.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo Replace YOUR_USERNAME with your actual GitHub username.
echo.
echo For GitHub Pages hosting:
echo 1. Go to your repository Settings
echo 2. Navigate to Pages section
echo 3. Select "Deploy from a branch"
echo 4. Choose main branch and "/" folder
echo.
echo Your website will be available at: https://YOUR_USERNAME.github.io/Inferno_Mach/
echo.
echo === END INSTRUCTIONS ===
echo.
echo Press any key to open the GitHub new repository page...
pause >nul
start "" "https://github.com/new"