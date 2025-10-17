# Configuration Strapi CMS pour Lycée Asdrubal

Ce guide explique comment configurer Strapi comme CMS headless pour le site du Lycée Asdrubal.

## 🚀 Installation de Strapi

### 1. Créer un nouveau projet Strapi

```bash
npx create-strapi-app@latest lycee-cms --quickstart
cd lycee-cms
```

### 2. Démarrer Strapi

```bash
npm run develop
```

Accéder à l'admin : http://localhost:1337/admin

## 📋 Content Types à créer

### 1. Articles (Actualités)

```javascript
// Content Type: Article
{
  "collectionName": "articles",
  "info": {
    "singularName": "article",
    "pluralName": "articles",
    "displayName": "Article",
    "description": "Articles d'actualités du lycée"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "title": {
      "type": "string",
      "required": true,
      "maxLength": 255
    },
    "slug": {
      "type": "uid",
      "targetField": "title",
      "required": true
    },
    "excerpt": {
      "type": "text",
      "maxLength": 500
    },
    "content": {
      "type": "richtext",
      "required": true
    },
    "featured": {
      "type": "boolean",
      "default": false
    },
    "category": {
      "type": "enumeration",
      "enum": [
        "Admissions",
        "Événements",
        "Vie scolaire",
        "Résultats",
        "Équipements"
      ],
      "required": true
    },
    "tags": {
      "type": "json"
    },
    "image": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    },
    "gallery": {
      "type": "media",
      "multiple": true,
      "allowedTypes": ["images", "videos"]
    },
    "author": {
      "type": "string",
      "default": "Rédaction"
    },
    "publishedAt": {
      "type": "datetime"
    }
  }
}
```

### 2. Événements

```javascript
// Content Type: Event
{
  "collectionName": "events",
  "info": {
    "singularName": "event",
    "pluralName": "events",
    "displayName": "Événement",
    "description": "Événements du lycée"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "title": {
      "type": "string",
      "required": true,
      "maxLength": 255
    },
    "slug": {
      "type": "uid",
      "targetField": "title",
      "required": true
    },
    "description": {
      "type": "richtext",
      "required": true
    },
    "startDate": {
      "type": "datetime",
      "required": true
    },
    "endDate": {
      "type": "datetime"
    },
    "location": {
      "type": "string"
    },
    "type": {
      "type": "enumeration",
      "enum": [
        "Réunion",
        "Sortie",
        "Cérémonie",
        "Formation",
        "Autre"
      ],
      "required": true
    },
    "image": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    },
    "registrationRequired": {
      "type": "boolean",
      "default": false
    },
    "maxParticipants": {
      "type": "integer"
    }
  }
}
```

### 3. Galerie

```javascript
// Content Type: Gallery
{
  "collectionName": "galleries",
  "info": {
    "singularName": "gallery",
    "pluralName": "galleries",
    "displayName": "Galerie",
    "description": "Galerie photos et vidéos"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "title": {
      "type": "string",
      "required": true,
      "maxLength": 255
    },
    "slug": {
      "type": "uid",
      "targetField": "title",
      "required": true
    },
    "description": {
      "type": "text"
    },
    "album": {
      "type": "enumeration",
      "enum": [
        "Cérémonies",
        "Activités",
        "Sports",
        "Vie académique",
        "Événements"
      ],
      "required": true
    },
    "media": {
      "type": "media",
      "multiple": true,
      "allowedTypes": ["images", "videos"],
      "required": true
    },
    "featured": {
      "type": "boolean",
      "default": false
    },
    "date": {
      "type": "date",
      "required": true
    }
  }
}
```

### 4. Membres de l'équipe

```javascript
// Content Type: TeamMember
{
  "collectionName": "team_members",
  "info": {
    "singularName": "team-member",
    "pluralName": "team-members",
    "displayName": "Membre d'équipe",
    "description": "Membres de l'équipe pédagogique"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "firstName": {
      "type": "string",
      "required": true
    },
    "lastName": {
      "type": "string",
      "required": true
    },
    "role": {
      "type": "string",
      "required": true
    },
    "department": {
      "type": "enumeration",
      "enum": [
        "Direction",
        "Pédagogie",
        "Vie scolaire",
        "Administration",
        "Support"
      ],
      "required": true
    },
    "bio": {
      "type": "text"
    },
    "photo": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    },
    "email": {
      "type": "email"
    },
    "phone": {
      "type": "string"
    },
    "linkedin": {
      "type": "string"
    },
    "order": {
      "type": "integer",
      "default": 0
    }
  }
}
```

### 5. Programmes

```javascript
// Content Type: Program
{
  "collectionName": "programs",
  "info": {
    "singularName": "program",
    "pluralName": "programs",
    "displayName": "Programme",
    "description": "Programmes éducatifs"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "title": {
      "type": "string",
      "required": true,
      "maxLength": 255
    },
    "slug": {
      "type": "uid",
      "targetField": "title",
      "required": true
    },
    "description": {
      "type": "richtext",
      "required": true
    },
    "level": {
      "type": "enumeration",
      "enum": [
        "Primaire",
        "Collège",
        "Lycée"
      ],
      "required": true
    },
    "duration": {
      "type": "string",
      "required": true
    },
    "ageRange": {
      "type": "string",
      "required": true
    },
    "subjects": {
      "type": "json"
    },
    "features": {
      "type": "json"
    },
    "schedule": {
      "type": "string"
    },
    "requirements": {
      "type": "json"
    },
    "image": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    },
    "order": {
      "type": "integer",
      "default": 0
    }
  }
}
```

## 🔧 Configuration API

### 1. Permissions

Pour chaque Content Type, configurer les permissions :

**Public** (pour le frontend) :
- Articles : `find`, `findOne`
- Events : `find`, `findOne`
- Galleries : `find`, `findOne`
- TeamMembers : `find`, `findOne`
- Programs : `find`, `findOne`

**Authenticated** (pour l'admin) :
- Tous les Content Types : `find`, `findOne`, `create`, `update`, `delete`

### 2. API Token

Créer un token API pour le frontend :

1. Aller dans Settings > API Tokens
2. Créer un nouveau token :
   - Name : "Frontend Access"
   - Token duration : Unlimited
   - Token type : Read-only
3. Copier le token et l'ajouter dans `.env.local`

## 🔗 Intégration avec Next.js

### 1. Installation des dépendances

```bash
npm install axios
```

### 2. Configuration API

```typescript
// src/lib/strapi.ts
import axios from 'axios';

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Authorization': `Bearer ${STRAPI_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const fetchArticles = async () => {
  const response = await api.get('/articles?populate=*&sort=publishedAt:desc');
  return response.data;
};

export const fetchArticle = async (slug: string) => {
  const response = await api.get(`/articles?filters[slug][$eq]=${slug}&populate=*`);
  return response.data.data[0];
};

export const fetchEvents = async () => {
  const response = await api.get('/events?populate=*&sort=startDate:asc');
  return response.data;
};

export const fetchGalleries = async () => {
  const response = await api.get('/galleries?populate=*&sort=date:desc');
  return response.data;
};

export const fetchTeamMembers = async () => {
  const response = await api.get('/team-members?populate=*&sort=order:asc');
  return response.data;
};

export const fetchPrograms = async () => {
  const response = await api.get('/programs?populate=*&sort=order:asc');
  return response.data;
};
```

### 3. Utilisation dans les composants

```typescript
// src/app/[locale]/news/page.tsx
import { fetchArticles } from '@/lib/strapi';

export default async function NewsPage() {
  const articles = await fetchArticles();
  
  return (
    <div>
      {articles.data.map(article => (
        <div key={article.id}>
          <h2>{article.attributes.title}</h2>
          <p>{article.attributes.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
```

## 📱 Déploiement

### 1. Strapi en production

```bash
# Build pour la production
npm run build

# Démarrer en production
npm start
```

### 2. Variables d'environnement

```env
# .env.production
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
TRANSFER_TOKEN_SALT=your_transfer_token_salt
JWT_SECRET=your_jwt_secret
```

### 3. Base de données

Strapi supporte :
- SQLite (développement)
- PostgreSQL (production recommandé)
- MySQL
- MariaDB

Configuration PostgreSQL :
```javascript
// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'lycee_cms'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
```

## 🔐 Sécurité

### 1. Configuration CORS

```javascript
// config/middlewares.js
module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['https://asdrubal.edu.tn', 'https://www.asdrubal.edu.tn']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

### 2. Rate Limiting

```bash
npm install strapi-plugin-rate-limit
```

### 3. Backup automatique

Configurer des sauvegardes régulières de la base de données et des médias.

## 📊 Monitoring

### 1. Logs

Configurer les logs pour surveiller :
- Erreurs API
- Performance
- Utilisation

### 2. Analytics

Intégrer Google Analytics ou alternative pour suivre :
- Contenus les plus consultés
- Performance des pages
- Comportement des utilisateurs

---

Cette configuration Strapi fournira un CMS robuste et flexible pour gérer tout le contenu du site du Lycée Asdrubal.
