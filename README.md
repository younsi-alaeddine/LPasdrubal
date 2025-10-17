# Lycée Privé Asdrubal - Site Web

Site web moderne et professionnel pour le Lycée Privé Asdrubal, développé avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

### ✨ Caractéristiques principales
- **Design moderne et responsive** - Compatible mobile, tablette et desktop
- **Multilingue** - Support français et arabe tunisien avec RTL
- **SEO optimisé** - Métadonnées, sitemap, schema.org
- **Accessibilité** - Conforme WCAG AA
- **Performance** - Optimisé pour la vitesse et le référencement

### 📱 Pages et sections
- **Accueil** - Hero section, atouts, actualités, témoignages
- **À propos** - Mission, valeurs, histoire, équipe, accréditations
- **Formations** - Programmes par cycle (primaire, collège, lycée)
- **Admissions** - Processus, formulaires, tarifs, FAQ
- **Vie scolaire** - Activités, services, règlements
- **Actualités** - Articles avec filtres et recherche
- **Galerie** - Photos et vidéos avec lightbox
- **Contact** - Formulaires et informations
- **Portails** - Espaces parents, élèves, professeurs

### 🛠 Technologies utilisées

#### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **React Hook Form** - Gestion des formulaires
- **Zod** - Validation des données

#### Internationalisation
- **next-intl** - Gestion multilingue
- **Support RTL** - Interface arabe de droite à gauche

#### SEO & Performance
- **Métadonnées dynamiques** - Open Graph, Twitter Cards
- **Schema.org** - Données structurées
- **Sitemap XML** - Génération automatique
- **Robots.txt** - Configuration des moteurs de recherche
- **Images optimisées** - Next.js Image avec WebP/AVIF

## 🚀 Installation et démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/your-username/lycee-asdrubal.git
cd lycee-asdrubal
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Configuration de l'environnement**
```bash
cp .env.example .env.local
```

Éditer `.env.local` avec vos configurations :
```env
# URLs et domaines
NEXT_PUBLIC_SITE_URL=https://asdrubal.edu.tn
NEXT_PUBLIC_API_URL=https://api.asdrubal.edu.tn

# CMS (Strapi/Sanity)
STRAPI_URL=https://cms.asdrubal.edu.tn
STRAPI_TOKEN=your_strapi_token

# Email (SendGrid/Mailgun)
SENDGRID_API_KEY=your_sendgrid_key
EMAIL_FROM=noreply@asdrubal.edu.tn

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret
```

4. **Démarrer en développement**
```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗 Structure du projet

```
lycee-asdrubal/
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── [locale]/          # Pages avec internationalisation
│   │   │   ├── page.tsx       # Page d'accueil
│   │   │   ├── about/         # Page à propos
│   │   │   ├── programs/      # Page formations
│   │   │   ├── admissions/    # Page admissions
│   │   │   ├── school-life/   # Page vie scolaire
│   │   │   ├── news/          # Page actualités
│   │   │   ├── gallery/       # Page galerie
│   │   │   ├── contact/       # Page contact
│   │   │   └── portal/        # Pages portails
│   │   ├── api/               # API Routes
│   │   │   ├── sitemap/       # Génération sitemap
│   │   │   ├── robots/        # Robots.txt
│   │   │   └── contact/       # API contact
│   │   ├── globals.css        # Styles globaux
│   │   └── layout.tsx         # Layout racine
│   ├── components/            # Composants réutilisables
│   │   ├── ui/               # Composants UI de base
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── ...
│   │   ├── layout/           # Composants de layout
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── seo/              # Composants SEO
│   │       ├── MetaTags.tsx
│   │       └── JsonLd.tsx
│   ├── lib/                  # Utilitaires et configurations
│   │   ├── utils.ts          # Fonctions utilitaires
│   │   └── validations.ts    # Schémas de validation
│   ├── messages/             # Traductions
│   │   ├── fr.json          # Français
│   │   └── ar.json          # Arabe
│   └── types/               # Types TypeScript
│       └── index.ts
├── public/                  # Fichiers statiques
│   ├── images/             # Images
│   ├── documents/          # Documents PDF
│   └── favicon.ico
├── next.config.js          # Configuration Next.js
├── tailwind.config.js      # Configuration Tailwind
├── tsconfig.json           # Configuration TypeScript
├── vercel.json            # Configuration Vercel
└── README.md
```

## 🌐 Internationalisation

### Ajout d'une nouvelle langue

1. **Ajouter la langue dans la configuration**
```typescript
// src/i18n.ts
const locales = ['fr', 'ar', 'en']; // Ajouter 'en'
```

2. **Créer le fichier de traduction**
```bash
# src/messages/en.json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    // ...
  }
}
```

3. **Mettre à jour le middleware**
```typescript
// src/middleware.ts
locales: ['fr', 'ar', 'en']
```

### Traduction des contenus

Les traductions sont dans `src/messages/` :
- `fr.json` - Français (langue par défaut)
- `ar.json` - Arabe tunisien

Pour ajouter une nouvelle clé :
1. Ajouter dans `fr.json`
2. Traduire dans `ar.json`
3. Utiliser avec `useTranslations('key')`

## 🎨 Personnalisation

### Couleurs et thème

Modifier `tailwind.config.js` :
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### Composants

Les composants UI sont dans `src/components/ui/` et utilisent :
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **TypeScript** pour la sécurité des types

## 📱 CMS Integration

### Strapi (Recommandé)

1. **Installer Strapi**
```bash
npx create-strapi-app@latest lycee-cms --quickstart
```

2. **Créer les content types**
- Articles (actualités)
- Événements
- Galerie
- Membres de l'équipe
- Programmes

3. **Configuration API**
```typescript
// src/lib/strapi.ts
const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

export const fetchFromStrapi = async (endpoint: string) => {
  const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${STRAPI_TOKEN}`,
    },
  });
  return response.json();
};
```

### Sanity (Alternative)

```bash
npm install @sanity/client @sanity/image-url
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Connecter le repository**
   - Aller sur [vercel.com](https://vercel.com)
   - Importer le projet GitHub
   - Configurer les variables d'environnement

2. **Variables d'environnement sur Vercel**
```bash
NEXT_PUBLIC_SITE_URL=https://asdrubal.edu.tn
STRAPI_URL=https://cms.asdrubal.edu.tn
STRAPI_TOKEN=your_token
SENDGRID_API_KEY=your_key
```

3. **Déploiement automatique**
   - Push sur `main` → déploiement automatique
   - Pull requests → preview deployments

### Netlify (Alternative)

1. **Configuration**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Tests

### Tests unitaires
```bash
npm run test
```

### Tests E2E
```bash
npm run test:e2e
```

### Linting
```bash
npm run lint
npm run lint:fix
```

## 📊 Performance

### Métriques cibles
- **Lighthouse Performance** : >90
- **Accessibility** : >95
- **Best Practices** : >95
- **SEO** : >95

### Optimisations incluses
- **Images optimisées** avec Next.js Image
- **Lazy loading** des composants
- **Code splitting** automatique
- **Compression** Gzip/Brotli
- **Cache** optimisé

## 🔒 Sécurité

### Mesures implémentées
- **Headers de sécurité** (CSP, HSTS, etc.)
- **Validation** des formulaires côté client et serveur
- **Protection CSRF** 
- **Rate limiting** sur les APIs
- **Sanitisation** des entrées utilisateur

## 📞 Support

### Contact technique
- **Email** : tech@asdrubal.edu.tn
- **Documentation** : [docs.asdrubal.edu.tn](https://docs.asdrubal.edu.tn)

### Contribution
1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'Ajouter nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🎯 Roadmap

### Version 1.1
- [ ] Intégration CMS complète
- [ ] Système de réservation en ligne
- [ ] Chat en direct
- [ ] Application mobile

### Version 1.2
- [ ] Système de paiement en ligne
- [ ] Espace parents avancé
- [ ] Analytics avancées
- [ ] API publique

---

**Lycée Privé Asdrubal** - Excellence & Bienveillance depuis 1995
