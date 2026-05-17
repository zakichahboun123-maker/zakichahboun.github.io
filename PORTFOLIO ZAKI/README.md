# Zaki Chahboun — Portfolio Interactive

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-0ea5e9?style=flat-square&logo=github)](https://zakichahboun.github.io/portfolio)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

> Portfolio interactif et responsive d'un ingénieur aéronautique spécialisé en méthodes et amélioration continue.

---

## 🚀 Aperçu

Portfolio professionnel avec :  
- **Design moderne** avec mode sombre/clair
- **Animations GSAP** et effets visuels
- **Responsive** (mobile, tablette, desktop)
- **Bilingue** (Français / Anglais)
- **Curseur personnalisé** avec effet de lueur
- **Particules animées** en arrière-plan
- **Défilement fluide** avec déclencheurs de scroll

---

## 📁 Structure du projet

```
portfolio/
├── index.html              # Page principale
├── README.md               # Ce fichier
├── assets/
│   ├── css/
│   │   └── style.css       # Styles principaux
│   ├── js/
│   │   └── main.js         # Scripts et animations
│   ├── images/             # Images et logos
│   └── docs/               # Documents (CV PDF, etc.)
```

---

## 🛠️ Technologies utilisées

| Technologie | Usage |
|-------------|-------|
| HTML5 | Structure sémantique |
| CSS3 | Styles, variables, animations, responsive |
| JavaScript | Interactivité, animations, thème, langue |
| GSAP | Animations avancées et scroll triggers |
| Font Awesome | Icônes |
| Canvas API | Système de particules |

---

## 🎨 Fonctionnalités

### Mode Sombre / Clair
- Basculer entre les thèmes via le bouton en haut à droite
- Préférences sauvegardées automatiquement

### Changement de langue
- Toggle FR / EN pour tout le contenu
- Traductions intégrées dans les attributs `data-fr` et `data-en`

### Sections
1. **Accueil** — Présentation avec photo orbitale et statistiques
2. **Expérience** — Timeline professionnelle (Lisi Aerospace)
3. **Projets Académiques** — Drone, bras robotique, trieuse de pièces
4. **Compétences** — Lean, Power BI, VBA, Métrologie
5. **Logiciels & Certifications** — CATIA, SolidWorks, Excel, etc.
6. **Formation** — ENSA Safi, EST Fès
7. **Langues** — Arabe, Français, Anglais, Espagnol
8. **Contact** — Liens email, LinkedIn, téléphone

### Animations
- Particules interactives (Canvas)
- Curseur personnalisé avec halo lumineux
- Anneaux orbitaux autour de la photo
- Apparitions au scroll (fade, slide, scale)
- Dégradés mesh animés en arrière-plan
- Effets de survol sur les cartes et boutons

---

## 📦 Déploiement sur GitHub Pages

### 1. Créer un nouveau repository
```bash
# Sur GitHub, créer un repository nommé "portfolio"
# Ou via CLI :
gh repo create portfolio --public --clone
```

### 2. Cloner et copier les fichiers
```bash
git clone https://github.com/votre-username/portfolio.git
cd portfolio
# Copier tous les fichiers de ce dossier
```

### 3. Pousser sur GitHub
```bash
git add .
git commit -m "Initial commit: Portfolio Zaki Chahboun"
git push origin main
```

### 4. Activer GitHub Pages
1. Aller sur **Settings** → **Pages**
2. Source : **Deploy from a branch**
3. Branch : **main** / **root**
4. Cliquer **Save**
5. Attendre 1-2 minutes, puis accéder à :
   `https://votre-username.github.io/portfolio`

---

## 📝 Personnalisation

### Modifier les couleurs
Éditer `assets/css/style.css` — variables CSS en haut du fichier :
```css
:root {
    --bg-primary: #0f172a;    /* Fond sombre */
    --accent-cyan: #0ea5e9;   /* Accent principal */
    --accent-blue: #0284c7;   /* Accent secondaire */
    /* ... */
}
```

### Ajouter un projet
Dans `index.html`, copier-coller un bloc `.timeline-item` dans la section `#projects`.

### Ajouter une expérience
Même procédé dans la section expérience professionnelle.

---

## 📄 Licence

Ce projet est sous licence **MIT**.  
Vous êtes libre de l'utiliser, le modifier et le partager.

---

## 👤 Contact

**Zaki Chahboun**  
📧 zakichahboun123@gmail.com  
💼 [LinkedIn]([https://linkedin.com/in/zakichahboun](https://www.linkedin.com/in/zaki-chahboun-717128196/))  
📍 Tanger, Maroc

---

> *"L'excellence n'est pas un acte, mais une habitude."* — Aristote
