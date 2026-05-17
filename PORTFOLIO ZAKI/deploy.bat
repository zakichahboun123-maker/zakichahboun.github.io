@echo off
chcp 65001 >nul
echo 🚀 Déploiement du Portfolio Zaki Chahboun
echo ==========================================

set /p USERNAME="Entrez votre nom d'utilisateur GitHub: "

if not exist .git (
    git init
    git branch -M main
)

git remote remove origin 2>nul
git remote add origin https://github.com/%USERNAME%/portfolio.git

git add .
git commit -m "Initial commit: Portfolio Zaki Chahboun"

echo 📤 Envoi sur GitHub...
git push -u origin main

echo.
echo ✅ Terminé !
echo 🌐 Votre portfolio sera disponible sous peu à:
echo    https://%USERNAME%.github.io/portfolio
echo.
echo 📋 Prochaines étapes:
echo    1. Allez sur https://github.com/%USERNAME%/portfolio/settings/pages
echo    2. Activez GitHub Pages (Source: Deploy from a branch -^> main)
echo    3. Attendez 1-2 minutes et rafraîchissez

pause
