'use client';

import Head from 'next/head';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
  siteName?: string;
  noIndex?: boolean;
  canonical?: string;
}

const MetaTags = ({
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
}: MetaTagsProps) => {
  const fullTitle = title.includes('Lycée') ? title : `${title} | ${siteName}`;
  const fullImage = image || '/images/og-default.jpg';
  const fullUrl = url || 'https://asdrubal.edu.tn';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Lycée Privé Asdrubal" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content={locale.split('_')[0]} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default MetaTags;
