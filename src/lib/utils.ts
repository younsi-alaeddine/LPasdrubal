import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Fonction utilitaire pour formater les dates
export function formatDate(date: Date | string, locale: string = 'fr') {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

// Fonction pour générer les métadonnées SEO
export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
}: {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      image,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image,
    },
  };
}

// Fonction pour valider les emails
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Fonction pour valider les numéros de téléphone tunisiens
export function isValidTunisianPhone(phone: string): boolean {
  const phoneRegex = /^(\+216|00216)?[2-5]\d{7}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}
