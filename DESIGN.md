# Design System - Lycée Privé Asdrubal

Ce document décrit le système de design et l'identité visuelle du site du Lycée Asdrubal.

## 🎨 Identité Visuelle

### Mission
Créer une identité visuelle moderne, élégante et professionnelle qui reflète l'excellence académique et les valeurs humaines du Lycée Asdrubal.

### Valeurs visuelles
- **Modernité** : Design contemporain et épuré
- **Élégance** : Aesthetic raffinée et sophistiquée
- **Professionnalisme** : Sérieux et crédibilité
- **Accessibilité** : Inclusif et facile d'utilisation
- **Chaleur** : Accueillant et bienveillant

## 🌈 Palette de Couleurs

### Couleurs Principales
```css
/* Bleu Principal - Confiance, stabilité */
--primary-50: #eff6ff;
--primary-500: #3b82f6;
--primary-600: #2563eb;
--primary-900: #1e3a8a;

/* Vert Accent - Croissance, succès */
--accent-500: #22c55e;
--accent-600: #16a34a;

/* Gris Neutre - Équilibre, sophistication */
--gray-50: #f8fafc;
--gray-500: #64748b;
--gray-900: #0f172a;
```

### Utilisation des Couleurs

**Bleu Principal (#2563eb)**
- Boutons d'action primaires
- Liens et éléments interactifs
- Headers et éléments de navigation
- Accents et highlights

**Vert Accent (#22c55e)**
- Indicateurs de succès
- Éléments de confirmation
- Statistiques positives
- Call-to-actions secondaires

**Gris Neutre (#64748b)**
- Texte secondaire
- Bordures et séparateurs
- Arrière-plans subtils
- Éléments de support

## 🔤 Typographie

### Police Principale
**Inter** - Police moderne et lisible
- Poids disponibles : 100-900
- Excellente lisibilité sur tous les écrans
- Support multilingue (français/arabe)

### Police Arabe
**Noto Sans Arabic** - Police optimisée pour l'arabe
- Support complet des caractères arabes
- Lisibilité optimale en RTL
- Cohérence visuelle avec Inter

### Hiérarchie Typographique

```css
/* Titres */
h1: 3rem (48px) - Hero, pages principales
h2: 2.25rem (36px) - Sections importantes
h3: 1.875rem (30px) - Sous-sections
h4: 1.5rem (24px) - Cartes, composants

/* Corps de texte */
body: 1rem (16px) - Texte principal
small: 0.875rem (14px) - Métadonnées, légendes
caption: 0.75rem (12px) - Labels, annotations
```

## 📐 Espacement et Grille

### Système d'Espacement
```css
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
```

### Grille Responsive
```css
/* Mobile First */
.container {
  max-width: 100%;
  padding: 0 1rem;
}

/* Tablette */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding: 0 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding: 0 2rem;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
```

## 🎭 Composants UI

### Boutons

**Bouton Principal**
```css
.btn-primary {
  background: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}
```

**Bouton Secondaire**
```css
.btn-secondary {
  background: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
}
```

### Cartes

**Carte Standard**
```css
.card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
```

### Formulaires

**Input Standard**
```css
.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

## 🎬 Animations et Transitions

### Principes d'Animation
- **Durée** : 200-300ms pour les interactions courantes
- **Easing** : ease-out pour les entrées, ease-in pour les sorties
- **Micro-interactions** : Subtiles et utiles
- **Performance** : Utilisation de transform et opacity

### Animations Standards

**Fade In**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Slide Up**
```css
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Scale In**
```css
@keyframes scaleIn {
  from { 
    opacity: 0;
    transform: scale(0.95);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 767px) {
  /* Styles mobiles */
}

/* Tablette */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Styles tablette */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Styles desktop */
}

/* Large Desktop */
@media (min-width: 1280px) {
  /* Styles large desktop */
}
```

### Stratégie Mobile-First
1. **Design mobile d'abord** - Interface optimisée pour les petits écrans
2. **Progressive enhancement** - Ajout de fonctionnalités pour les grands écrans
3. **Touch-friendly** - Éléments interactifs de 44px minimum
4. **Performance** - Optimisation des images et du code

## 🌍 Internationalisation (i18n)

### Support Multilingue
- **Français** : Langue par défaut (LTR)
- **Arabe** : Langue secondaire (RTL)
- **Sélecteur de langue** : Accessible depuis le header
- **Direction automatique** : RTL appliqué automatiquement pour l'arabe

### RTL Support
```css
[dir="rtl"] {
  text-align: right;
}

[dir="rtl"] .ltr-only {
  display: none;
}

[dir="ltr"] .rtl-only {
  display: none;
}
```

## ♿ Accessibilité

### Standards WCAG AA
- **Contraste** : Ratio minimum 4.5:1 pour le texte normal
- **Navigation clavier** : Tous les éléments interactifs accessibles
- **Screen readers** : Labels ARIA appropriés
- **Focus visible** : Indicateurs de focus clairs
- **Alternative text** : Images avec descriptions

### Couleurs Accessibles
```css
/* Texte sur fond clair */
.text-dark {
  color: #1e293b; /* Contraste 12.63:1 */
}

/* Texte sur fond foncé */
.text-light {
  color: #f8fafc; /* Contraste 16.63:1 */
}
```

## 🎯 Composants Spécifiques

### Header
- **Logo** : Positionné à gauche, taille 40x40px
- **Navigation** : Centrée, espacement uniforme
- **CTA** : "S'inscrire" en évidence à droite
- **Mobile** : Menu hamburger avec drawer

### Hero Section
- **Hauteur** : 70vh minimum
- **Gradient** : Bleu dégradé subtil
- **Contenu** : Centré verticalement et horizontalement
- **CTA** : Boutons d'action proéminents

### Footer
- **Structure** : 4 colonnes sur desktop, empilées sur mobile
- **Couleur** : Fond gris foncé (#1e293b)
- **Contenu** : Liens, contact, réseaux sociaux
- **Copyright** : Centré en bas

## 📊 Performance Visuelle

### Optimisation Images
- **Formats** : WebP et AVIF prioritaires
- **Lazy loading** : Chargement différé
- **Responsive images** : Tailles adaptées
- **Compression** : Qualité optimisée

### Loading States
```css
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## 🛠 Outils de Design

### Figma
- **Design System** : Composants réutilisables
- **Prototypes** : Interactions et animations
- **Collaboration** : Équipe design et développement

### Assets
- **Logo** : SVG vectoriel, versions claire/sombre
- **Icônes** : Lucide React, cohérence visuelle
- **Images** : Optimisées, plusieurs formats
- **Fonts** : Google Fonts, chargement optimisé

## 📋 Checklist Design

### Avant mise en production
- [ ] Cohérence des couleurs
- [ ] Hiérarchie typographique respectée
- [ ] Espacements uniformes
- [ ] Animations fluides
- [ ] Responsive design testé
- [ ] Accessibilité validée
- [ ] Performance optimisée
- [ ] Tests utilisateurs effectués

### Maintenance
- [ ] Design system à jour
- [ ] Composants documentés
- [ ] Guidelines respectées
- [ ] Feedback utilisateurs intégré
- [ ] Métriques de performance suivies

---

Ce design system évolue avec les besoins du projet et les retours utilisateurs. Il est important de maintenir la cohérence et la qualité visuelle à travers toutes les pages du site.
