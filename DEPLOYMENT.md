# Guide de Déploiement - Lycée Asdrubal

Ce guide explique comment déployer le site du Lycée Asdrubal sur différentes plateformes.

## 🚀 Déploiement sur Vercel (Recommandé)

### 1. Préparation

1. **Vérifier la configuration**
```bash
# Vérifier que le build fonctionne
npm run build

# Vérifier les types TypeScript
npm run type-check

# Vérifier le linting
npm run lint
```

2. **Variables d'environnement**
Créer un fichier `.env.production` avec les variables nécessaires :
```env
NEXT_PUBLIC_SITE_URL=https://asdrubal.edu.tn
STRAPI_URL=https://cms.asdrubal.edu.tn
STRAPI_TOKEN=your_production_token
SENDGRID_API_KEY=your_sendgrid_key
EMAIL_FROM=noreply@asdrubal.edu.tn
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 2. Déploiement automatique avec Git

1. **Connecter le repository**
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer sur "New Project"
   - Importer le repository GitHub

2. **Configuration du projet**
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

3. **Variables d'environnement**
   Ajouter toutes les variables nécessaires dans les paramètres Vercel :
   ```
   NEXT_PUBLIC_SITE_URL = https://asdrubal.edu.tn
   STRAPI_URL = https://cms.asdrubal.edu.tn
   STRAPI_TOKEN = your_token
   SENDGRID_API_KEY = your_key
   EMAIL_FROM = noreply@asdrubal.edu.tn
   EMAIL_TO = contact@asdrubal.edu.tn
   NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY = your_key
   RECAPTCHA_SECRET_KEY = your_secret
   ```

4. **Déploiement**
   - Cliquer sur "Deploy"
   - Le déploiement se lance automatiquement
   - Le site sera disponible sur `https://lycee-asdrubal.vercel.app`

### 3. Configuration du domaine personnalisé

1. **Ajouter un domaine**
   - Aller dans Project Settings > Domains
   - Ajouter `asdrubal.edu.tn`
   - Configurer les enregistrements DNS

2. **Configuration DNS**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.19.61
   ```

3. **Certificat SSL**
   - Vercel gère automatiquement les certificats SSL
   - Forcer HTTPS dans les paramètres

### 4. Déploiement manuel avec CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

## 🌐 Déploiement sur Netlify

### 1. Configuration

1. **Fichier de configuration**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

2. **Déploiement**
   - Connecter le repository GitHub
   - Configurer les variables d'environnement
   - Déployer

## 🐳 Déploiement avec Docker

### 1. Dockerfile

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### 2. Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://asdrubal.edu.tn
    volumes:
      - ./uploads:/app/uploads
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
    restart: unless-stopped
```

### 3. Configuration Nginx

```nginx
# nginx.conf
events {
    worker_connections 1024;
}

http {
    upstream nextjs {
        server app:3000;
    }

    server {
        listen 80;
        server_name asdrubal.edu.tn www.asdrubal.edu.tn;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name asdrubal.edu.tn www.asdrubal.edu.tn;

        ssl_certificate /etc/nginx/ssl/cert.pem;
        ssl_certificate_key /etc/nginx/ssl/key.pem;

        location / {
            proxy_pass http://nextjs;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
        }
    }
}
```

## 📊 Monitoring et Analytics

### 1. Google Analytics

```typescript
// src/lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

### 2. Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 3. Monitoring des erreurs

```bash
npm install @sentry/nextjs
```

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

## 🔒 Sécurité

### 1. Headers de sécurité

```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

### 2. Rate Limiting

```typescript
// src/lib/rate-limit.ts
import { NextRequest, NextResponse } from 'next/server';

const rateLimitMap = new Map();

export function rateLimit(limit: number = 10, window: number = 60) {
  return (req: NextRequest) => {
    const ip = req.ip ?? '127.0.0.1';
    const now = Date.now();
    const windowStart = now - window * 1000;

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, []);
    }

    const requests = rateLimitMap.get(ip);
    const validRequests = requests.filter((time: number) => time > windowStart);
    validRequests.push(now);
    rateLimitMap.set(ip, validRequests);

    if (validRequests.length > limit) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
    }

    return null;
  };
}
```

## 🚀 Performance

### 1. Optimisation des images

```typescript
// next.config.js
module.exports = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
};
```

### 2. Bundle Analyzer

```bash
npm install @next/bundle-analyzer
```

```typescript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // configuration
});
```

### 3. Optimisation du CSS

```typescript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Purge CSS en production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
};
```

## 📋 Checklist de déploiement

### Avant le déploiement
- [ ] Tests unitaires passent
- [ ] Tests E2E passent
- [ ] Linting sans erreurs
- [ ] Build en production réussi
- [ ] Variables d'environnement configurées
- [ ] Domaine configuré
- [ ] Certificat SSL actif
- [ ] Analytics configuré

### Après le déploiement
- [ ] Site accessible
- [ ] Toutes les pages fonctionnent
- [ ] Formulaires fonctionnent
- [ ] Images et médias chargent
- [ ] SEO (sitemap, robots.txt)
- [ ] Performance (Lighthouse > 90)
- [ ] Accessibilité (WCAG AA)
- [ ] Monitoring actif

## 🆘 Dépannage

### Problèmes courants

1. **Build échoue**
   - Vérifier les variables d'environnement
   - Vérifier les imports manquants
   - Vérifier la configuration TypeScript

2. **Images ne se chargent pas**
   - Vérifier la configuration des domaines
   - Vérifier les permissions des fichiers

3. **API ne fonctionne pas**
   - Vérifier les variables d'environnement
   - Vérifier la configuration CORS
   - Vérifier les logs d'erreur

4. **SEO ne fonctionne pas**
   - Vérifier le sitemap.xml
   - Vérifier les métadonnées
   - Vérifier les données structurées

### Logs et debugging

```bash
# Vercel
vercel logs [deployment-url]

# Docker
docker logs [container-name]

# Nginx
tail -f /var/log/nginx/error.log
```

---

Pour toute question sur le déploiement, consultez cette documentation ou contactez l'équipe de développement.
