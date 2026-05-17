# 🚀 Guide de Déploiement — GitHub Pages

## Étape 1 : Créer un compte GitHub (si pas encore fait)
→ https://github.com/signup

## Étape 2 : Créer un nouveau repository

### Méthode A — Interface web :
1. Connectez-vous à GitHub
2. Cliquez sur le **+** en haut → **New repository**
3. Nom du repository : `portfolio` (ou `zakichahboun.github.io` pour l'URL racine)
4. Visibilité : **Public**
5. Cochez **Add a README file**
6. Cliquez **Create repository**

### Méthode B — Ligne de commande (GitHub CLI) :
```bash
gh auth login
gh repo create portfolio --public --description "Portfolio professionnel de Zaki Chahboun" --clone
```

## Étape 3 : Télécharger les fichiers

### Méthode A — Interface web (recommandé pour débutants) :
1. Allez sur votre repository GitHub
2. Cliquez sur **Add file** → **Upload files**
3. Glissez-déposez TOUS les fichiers du dossier `portfolio-github`
4. Écrivez un message de commit : `Initial commit`
5. Cliquez **Commit changes**

### Méthode B — Ligne de commande :
```bash
# Se placer dans le dossier portfolio-github
cd portfolio-github

# Initialiser Git
git init

# Ajouter le remote (remplacez VOTRE_USERNAME)
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "Initial commit: Portfolio Zaki Chahboun"

# Pousser sur GitHub
git branch -M main
git push -u origin main
```

## Étape 4 : Activer GitHub Pages

1. Sur votre repository GitHub, allez dans l'onglet **Settings**
2. Dans le menu de gauche, cliquez sur **Pages**
3. Section **Build and deployment** :
   - **Source** : `Deploy from a branch`
   - **Branch** : `main` / `/(root)`
4. Cliquez **Save**
5. Attendez 1-2 minutes
6. Rafraîchissez la page — l'URL apparaîtra en vert :
   ```
   https://votre-username.github.io/portfolio
   ```

## Étape 5 : Vérifier le déploiement

Ouvrez l'URL dans votre navigateur. Vous devriez voir votre portfolio en ligne !

---

## 🔄 Mise à jour future

Pour modifier votre portfolio plus tard :

```bash
# Modifier les fichiers localement
# Puis :
git add .
git commit -m "Description des modifications"
git push origin main
```

Les modifications apparaîtront automatiquement en ligne après 1-2 minutes.

---

## 🌐 Utiliser un domaine personnalisé (optionnel)

1. Achetez un domaine (ex: zakichahboun.com)
2. Dans votre repository, modifiez le fichier `CNAME` :
   ```
   zakichahboun.com
   ```
3. Chez votre registrar DNS, ajoutez un enregistrement :
   - Type : `CNAME`
   - Nom : `@` ou `www`
   - Valeur : `votre-username.github.io`
4. Dans GitHub Pages settings, entrez votre domaine dans **Custom domain**
5. Cochez **Enforce HTTPS**

---

## 🐛 Dépannage

| Problème | Solution |
|----------|----------|
| Page blanche | Vérifiez que `index.html` est à la racine |
| CSS non chargé | Vérifiez les chemins dans `<link rel="stylesheet">` |
| Images absentes | Vérifiez les URLs des images |
| Modifications non visibles | Videz le cache (Ctrl+F5) |
| Erreur 404 | Attendez 2-3 minutes après le push |

---

## 📞 Besoin d'aide ?

- Documentation GitHub Pages : https://docs.github.com/fr/pages
- Contactez-moi sur LinkedIn : https://linkedin.com/in/zakichahboun
