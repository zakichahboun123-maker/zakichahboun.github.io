#!/bin/bash
# Quick-start script for deploying portfolio to GitHub Pages

echo "🚀 Déploiement du Portfolio Zaki Chahboun"
echo "=========================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git n'est pas installé. Installez-le d'abord."
    exit 1
fi

# Get GitHub username
read -p "Entrez votre nom d'utilisateur GitHub: " USERNAME

# Initialize git if not already done
if [ ! -d .git ]; then
    git init
    git branch -M main
fi

# Add remote
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$USERNAME/portfolio.git"

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio Zaki Chahboun"

# Push
echo "📤 Envoi sur GitHub..."
git push -u origin main

echo ""
echo "✅ Terminé !"
echo "🌐 Votre portfolio sera disponible sous peu à:"
echo "   https://$USERNAME.github.io/portfolio"
echo ""
echo "📋 Prochaines étapes:"
echo "   1. Allez sur https://github.com/$USERNAME/portfolio/settings/pages"
echo "   2. Activez GitHub Pages (Source: Deploy from a branch → main)"
echo "   3. Attendez 1-2 minutes et rafraîchissez"
