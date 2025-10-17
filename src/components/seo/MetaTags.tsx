import { Metadata } from 'next';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'book' | 'profile';
  locale?: string;
  siteName?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  locale = 'fr_FR',
  siteName = 'Lycée Privé Asdrubal',
  noIndex = false,
  canonical
}: MetaTagsProps): Metadata {
  const fullTitle = title.includes('Lycée') ? title : `${title} | ${siteName}`;
  const fullImage = image || '/images/og-default.jpg';
  const fullUrl = url || 'https://asdrubal.edu.tn';

  return {
    title: fullTitle,
    description,
    keywords: keywords?.split(',').map(k => k.trim()),
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      type,
      title: fullTitle,
      description,
      images: [fullImage],
      url: fullUrl,
      siteName,
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
    },
    authors: [{ name: 'Lycée Privé Asdrubal' }],
    themeColor: '#2563eb',
    alternates: canonical ? { canonical } : undefined,
  };
}
