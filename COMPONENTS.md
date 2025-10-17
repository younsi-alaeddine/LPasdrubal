# Documentation des Composants - Lycée Asdrubal

Ce document décrit tous les composants réutilisables du site du Lycée Asdrubal.

## 🎨 Composants UI de Base

### Button
Composant bouton avec différentes variantes et tailles.

```tsx
import Button from '@/components/ui/Button';

<Button variant="primary" size="lg" icon={<Plus />}>
  Ajouter
</Button>
```

**Props :**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- `icon`: ReactNode
- `iconPosition`: 'left' | 'right'

### Card
Composant carte avec header, content et footer optionnels.

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

<Card hover>
  <CardHeader>
    <CardTitle>Titre</CardTitle>
  </CardHeader>
  <CardContent>
    Contenu de la carte
  </CardContent>
</Card>
```

**Props :**
- `hover`: boolean - Ajoute un effet hover
- `padding`: 'sm' | 'md' | 'lg'

### Input
Composant input avec label, erreur et icône optionnels.

```tsx
import Input from '@/components/ui/Input';

<Input
  label="Email"
  type="email"
  error={errors.email?.message}
  icon={<Mail />}
  required
/>
```

**Props :**
- `label`: string
- `error`: string
- `helperText`: string
- `icon`: ReactNode

### Textarea
Composant textarea avec validation.

```tsx
import Textarea from '@/components/ui/Textarea';

<Textarea
  label="Message"
  placeholder="Votre message..."
  rows={4}
  required
/>
```

### Select
Composant select avec options personnalisées.

```tsx
import Select from '@/components/ui/Select';

<Select
  label="Niveau"
  options={[
    { value: 'primary', label: 'Primaire' },
    { value: 'middle', label: 'Collège' },
    { value: 'high', label: 'Lycée' }
  ]}
  placeholder="Sélectionnez un niveau"
/>
```

### Modal
Composant modal avec animations et gestion des événements.

```tsx
import Modal from '@/components/ui/Modal';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Titre du modal"
  size="md"
>
  Contenu du modal
</Modal>
```

**Props :**
- `isOpen`: boolean
- `onClose`: function
- `title`: string
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'

### Carousel
Composant carousel avec navigation et indicateurs.

```tsx
import Carousel from '@/components/ui/Carousel';

<Carousel
  items={items}
  autoPlay={true}
  autoPlayInterval={5000}
  showIndicators={true}
  showArrows={true}
/>
```

**Props :**
- `items`: ReactNode[]
- `autoPlay`: boolean
- `autoPlayInterval`: number
- `showIndicators`: boolean
- `showArrows`: boolean

### Hero
Composant hero section avec titre, sous-titre et boutons d'action.

```tsx
import Hero from '@/components/ui/Hero';

<Hero
  title="Titre principal"
  subtitle="Sous-titre descriptif"
  primaryCta={{
    text: "Action principale",
    href: "/action"
  }}
  secondaryCta={{
    text: "Action secondaire",
    href: "/autre-action"
  }}
  backgroundImage="/images/hero-bg.jpg"
/>
```

## 🏗 Composants de Layout

### Header
En-tête principal avec navigation, sélecteur de langue et menu mobile.

```tsx
import Header from '@/components/layout/Header';

<Header />
```

**Fonctionnalités :**
- Navigation responsive
- Sélecteur de langue (FR/AR)
- Menu mobile avec drawer
- CTA d'inscription

### Footer
Pied de page avec liens, informations de contact et réseaux sociaux.

```tsx
import Footer from '@/components/layout/Footer';

<Footer />
```

**Fonctionnalités :**
- Liens de navigation
- Informations de contact
- Liens vers les portails
- Réseaux sociaux

## 🔍 Composants SEO

### MetaTags
Composant pour gérer les métadonnées de page.

```tsx
import MetaTags from '@/components/seo/MetaTags';

<MetaTags
  title="Titre de la page"
  description="Description de la page"
  keywords="mots, clés, SEO"
  image="/images/page-image.jpg"
  url="/page-url"
/>
```

### JsonLd
Composant pour les données structurées Schema.org.

```tsx
import JsonLd, { OrganizationSchema } from '@/components/seo/JsonLd';

<JsonLd data={OrganizationSchema} />
```

**Schémas disponibles :**
- `OrganizationSchema` - Informations sur l'organisation
- `EventSchema` - Événements
- `ArticleSchema` - Articles de blog
- `BreadcrumbSchema` - Fil d'Ariane
- `FAQSchema` - Questions fréquentes

## 🎯 Utilisation et Bonnes Pratiques

### Structure des dossiers
```
src/components/
├── ui/           # Composants UI réutilisables
├── layout/       # Composants de layout
├── seo/          # Composants SEO
├── forms/        # Composants de formulaires
└── sections/     # Composants de sections
```

### Naming Convention
- **Composants** : PascalCase (ex: `Button`, `Card`)
- **Fichiers** : PascalCase.tsx (ex: `Button.tsx`)
- **Props** : camelCase (ex: `isOpen`, `onClose`)

### Props Interface
Toujours définir une interface TypeScript pour les props :

```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, ...props }, ref) => {
    // Implementation
  }
);
```

### Accessibilité
Tous les composants respectent les standards d'accessibilité :

- **ARIA labels** appropriés
- **Focus management**
- **Keyboard navigation**
- **Screen reader support**
- **Color contrast** conforme WCAG AA

### Responsive Design
Les composants sont responsives par défaut :

```tsx
// Utilisation des classes Tailwind responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => (
    <Card key={item.id}>{item.content}</Card>
  ))}
</div>
```

### Animations
Utilisation de Framer Motion pour les animations :

```tsx
import { motion } from 'framer-motion';

const AnimatedCard = motion.div;

<AnimatedCard
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <Card>Contenu animé</Card>
</AnimatedCard>
```

### Internationalisation
Support multilingue avec next-intl :

```tsx
import { useTranslations } from 'next-intl';

const Component = () => {
  const t = useTranslations('common');
  
  return <Button>{t('submit')}</Button>;
};
```

## 🧪 Tests

### Tests unitaires
```bash
npm run test
```

### Tests de composants
```tsx
import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
});
```

### Tests d'accessibilité
```tsx
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 📚 Ressources

- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

Pour toute question sur l'utilisation des composants, consultez cette documentation ou contactez l'équipe de développement.
