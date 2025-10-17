# 🏫 Lycée Privé Asdrubal - Site Web Officiel

> Site web moderne et professionnel pour le Lycée Privé Asdrubal - Excellence en éducation depuis 1999

![Lycée Asdrubal](https://img.shields.io/badge/Lycée-Asdrubal-blue?style=for-the-badge&logo=school)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan?style=for-the-badge&logo=tailwindcss)

## 📋 Table des Matières

- [🎯 Aperçu](#-aperçu)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies](#️-technologies)
- [🚀 Installation](#-installation)
- [📱 Utilisation](#-utilisation)
- [🌐 Déploiement](#-déploiement)
- [📊 Structure du Projet](#-structure-du-projet)
- [🎨 Design System](#-design-system)
- [🔧 Configuration](#-configuration)
- [📈 Performance](#-performance)
- [🤝 Contribution](#-contribution)
- [📄 Licence](#-licence)

## 🎯 Aperçu

Le site web du Lycée Privé Asdrubal est une plateforme moderne et complète qui présente l'établissement, ses programmes éducatifs, et facilite les interactions avec les parents et les étudiants. Le site est entièrement multilingue (Français/Arabe) avec support RTL.

### 🎯 Objectifs

- ✅ **Présentation professionnelle** de l'établissement
- ✅ **Interface utilisateur moderne** et intuitive
- ✅ **Expérience multilingue** complète (FR/AR)
- ✅ **Performance optimisée** pour tous les appareils
- ✅ **SEO optimisé** pour la visibilité en ligne
- ✅ **Accessibilité** conforme WCAG AA

## ✨ Fonctionnalités

### 🏠 Pages Principales
- **Accueil** - Présentation avec hero moderne et innovations
- **À Propos** - Mission, valeurs, équipe et accréditations
- **Formations** - Programmes par cycle (Primaire/Collège/Lycée)
- **Admissions** - Processus et formulaire d'inscription
- **Vie Scolaire** - Activités, cantine, transport, services médicaux
- **Actualités** - Articles et événements
- **Galerie** - Photos et vidéos des événements
- **Contact** - Informations et formulaire de contact

### 🚪 Portails
- **Espace Parents** - Suivi scolaire et communication
- **Espace Élève** - Ressources et emploi du temps
- **Espace Enseignant** - Outils pédagogiques

### 🌐 Fonctionnalités Techniques
- **Multilingue** - Français et Arabe avec support RTL
- **Responsive Design** - Optimisé mobile/tablette/desktop
- **SEO Avancé** - Métadonnées, sitemap, schema.org
- **Accessibilité** - Navigation clavier, contrastes, ARIA
- **Performance** - Optimisations images, lazy loading, caching
- **Formulaires** - Validation et envoi d'emails
- **Animations** - Transitions fluides avec Framer Motion

## 🛠️ Technologies

### Frontend
- **Next.js 14** - Framework React avec App Router
- **React 18** - Bibliothèque UI avec hooks modernes
- **TypeScript 5** - Typage statique pour la robustesse
- **Tailwind CSS 3** - Framework CSS utility-first
- **Framer Motion** - Animations et transitions

### Internationalisation
- **next-intl** - Gestion multilingue avancée
- **Support RTL** - Interface arabe de droite à gauche

### UI/UX
- **Lucide React** - Icônes modernes et cohérentes
- **Headless UI** - Composants accessibles
- **Custom Components** - Système de design modulaire

### Backend & APIs
- **Next.js API Routes** - Endpoints RESTful
- **Email Templates** - Notifications HTML professionnelles
- **Form Validation** - Validation côté client et serveur

### Outils de Développement
- **ESLint** - Linting et qualité du code
- **Prettier** - Formatage automatique
- **Jest** - Tests unitaires
- **Playwright** - Tests end-to-end
- **TypeScript** - Vérification de types

## 🚀 Installation

### Prérequis
- **Node.js** 18.0+ 
- **npm** 8.0+ ou **yarn** 1.22+
- **Git** pour le contrôle de version

### Installation Rapide

\`\`\`bash
# Cloner le repository
git clone https://github.com/younsi-alaeddine/LPasdrubal.git
cd LPasdrubal

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
\`\`\`

### Installation Détaillée

\`\`\`bash
# 1. Cloner le projet
git clone https://github.com/younsi-alaeddine/LPasdrubal.git
cd LPasdrubal

# 2. Installer les dépendances
npm install

# 3. Configurer l'environnement (optionnel)
cp .env.example .env.local

# 4. Vérifier l'installation
npm run type-check
npm run lint

# 5. Démarrer le serveur
npm run dev
\`\`\`

## 📱 Utilisation

### 🖥️ Développement

\`\`\`bash
# Serveur de développement
npm run dev

# Avec rechargement rapide
npm run dev:fast

# Vérification des types
npm run type-check

# Linting et correction
npm run lint
npm run lint:fix
\`\`\`

### 🧪 Tests

\`\`\`bash
# Tests unitaires
npm test

# Tests en mode watch
npm run test:watch

# Tests end-to-end
npm run test:e2e

# Tester toutes les pages
node scripts/test-pages.js
\`\`\`

### 🏗️ Build & Production

\`\`\`bash
# Build de production
npm run build

# Build rapide
npm run build:fast

# Analyser le bundle
npm run analyze

# Démarrer en production
npm start
\`\`\`

## 🌐 Déploiement

### Vercel (Recommandé)

\`\`\`bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Variables d'environnement à configurer:
# - EMAIL_SERVICE_API_KEY
# - EMAIL_FROM
# - EMAIL_TO
\`\`\`

### Netlify

\`\`\`bash
# Build command
npm run build

# Publish directory
.next

# Variables d'environnement
# EMAIL_SERVICE_API_KEY, EMAIL_FROM, EMAIL_TO
\`\`\`

### Docker

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## 📊 Structure du Projet

\`\`\`
lycee-asdrubal/
├── 📁 src/
│   ├── 📁 app/                    # App Router Next.js
│   │   ├── 📁 [locale]/          # Pages multilingues
│   │   │   ├── 📁 admissions/    # Page admissions
│   │   │   ├── 📁 about/         # Page à propos
│   │   │   ├── 📁 contact/       # Page contact
│   │   │   ├── 📁 gallery/       # Galerie photos
│   │   │   ├── 📁 news/          # Actualités
│   │   │   ├── 📁 portal/        # Espaces utilisateurs
│   │   │   └── 📄 page.tsx       # Page d'accueil
│   │   ├── 📁 api/               # API Routes
│   │   │   ├── 📁 contact/       # API contact
│   │   │   ├── 📁 admissions/    # API admissions
│   │   │   ├── 📁 sitemap/       # Sitemap dynamique
│   │   │   └── 📁 robots/        # Robots.txt
│   │   └── 📁 globals.css        # Styles globaux
│   ├── 📁 components/            # Composants réutilisables
│   │   ├── 📁 ui/                # Composants UI de base
│   │   ├── 📁 layout/            # Header, Footer
│   │   ├── 📁 seo/               # Composants SEO
│   │   └── 📁 forms/             # Formulaires
│   ├── 📁 lib/                   # Utilitaires et helpers
│   ├── 📁 messages/              # Traductions i18n
│   │   ├── 📄 fr.json            # Français
│   │   └── 📄 ar.json            # Arabe
│   └── 📁 styles/                # Styles personnalisés
├── 📁 public/                    # Assets statiques
│   ├── 📁 images/                # Images optimisées
│   └── 📁 icons/                 # Icônes et favicons
├── 📁 scripts/                   # Scripts utilitaires
├── 📁 tests/                     # Tests automatisés
├── 📄 next.config.js             # Configuration Next.js
├── 📄 tailwind.config.js         # Configuration Tailwind
├── 📄 tsconfig.json              # Configuration TypeScript
└── 📄 package.json               # Dépendances et scripts
\`\`\`

## 🎨 Design System

### 🎨 Palette de Couleurs

\`\`\`css
/* Couleurs Principales */
Primary: #0ea5e9 (Blue 500)
Secondary: #64748b (Slate 500)
Accent: #22c55e (Green 500)
Gold: #f59e0b (Amber 500)

/* Dégradés */
Gradient Primary: linear-gradient(135deg, #0ea5e9, #3b82f6)
Gradient Warm: linear-gradient(135deg, #f59e0b, #f97316)
\`\`\`

### 📝 Typographie

\`\`\`css
/* Fonts */
Primary: Inter (Latin)
Secondary: Noto Sans Arabic (Arabic)

/* Tailles */
Display: 4rem - 7rem (Hero)
Heading: 2rem - 4rem (Titres)
Body: 1rem - 1.25rem (Texte)
Caption: 0.875rem - 1rem (Légendes)
\`\`\`

### 🧩 Composants

- **Button** - Boutons avec variants et états
- **Card** - Cartes avec hover effects
- **Input/Select/Textarea** - Formulaires cohérents
- **Modal** - Modales accessibles
- **Toast** - Notifications contextuelles
- **Hero** - Sections hero responsives

## 🔧 Configuration

### Variables d'Environnement

\`\`\`bash
# .env.local
EMAIL_SERVICE_API_KEY=your_api_key
EMAIL_FROM=noreply@asdrubal.edu.tn
EMAIL_TO=contact@asdrubal.edu.tn
NEXT_PUBLIC_SITE_URL=https://asdrubal.edu.tn
\`\`\`

### Configuration Next.js

\`\`\`javascript
// next.config.js
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};
\`\`\`

## 📈 Performance

### 🚀 Optimisations Implémentées

- ✅ **Code Splitting** - Chargement à la demande
- ✅ **Image Optimization** - WebP/AVIF avec Next.js
- ✅ **Lazy Loading** - Composants et images
- ✅ **Bundle Analysis** - Optimisation des tailles
- ✅ **Caching** - Headers HTTP optimisés
- ✅ **Compression** - Gzip/Brotli
- ✅ **Fonts Optimization** - Google Fonts optimisées

### 📊 Métriques Cibles

- **Lighthouse Performance** > 90
- **First Contentful Paint** < 1.5s
- **Largest Contentful Paint** < 2.5s
- **Cumulative Layout Shift** < 0.1
- **First Input Delay** < 100ms

## 🤝 Contribution

### 🛠️ Développement

1. **Fork** le repository
2. **Créer** une branche feature (\`git checkout -b feature/nouvelle-fonctionnalite\`)
3. **Commit** les changements (\`git commit -am 'Ajouter nouvelle fonctionnalité'\`)
4. **Push** vers la branche (\`git push origin feature/nouvelle-fonctionnalite\`)
5. **Créer** une Pull Request

### 📋 Standards

- **TypeScript** strict mode activé
- **ESLint** et **Prettier** configurés
- **Tests** requis pour les nouvelles fonctionnalités
- **Documentation** mise à jour
- **Accessibilité** WCAG AA respectée

### 🧪 Tests

\`\`\`bash
# Tests unitaires
npm test

# Tests E2E
npm run test:e2e

# Tests de performance
npm run analyze
\`\`\`

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📞 Contact

**Lycée Privé Asdrubal**
- 📍 132 Avenue du 20 Mars 2000, Le Bardo, Tunis
- 📞 +216 71 66 03 33
- ✉️ lpasdrubal@gmail.com
- 🌐 [asdrubal.edu.tn](https://asdrubal.edu.tn)

---

<div align="center">

**Fait avec ❤️ pour l'éducation en Tunisie**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/younsi-alaeddine/LPasdrubal)
[![Website](https://img.shields.io/badge/Website-Asdrubal-blue?style=for-the-badge&logo=globe)](https://asdrubal.edu.tn)

</div>