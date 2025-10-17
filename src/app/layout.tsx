import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lycée Privé Asdrubal - Excellence & Bienveillance',
  description: 'Lycée Privé Asdrubal - enseignement de qualité, activités riches, admissions ouvertes. Contactez-nous pour une visite.',
  keywords: 'lycée privé, école tunisie, éducation, admissions, programmes scolaires',
  authors: [{ name: 'Lycée Privé Asdrubal' }],
  creator: 'Lycée Privé Asdrubal',
  publisher: 'Lycée Privé Asdrubal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://asdrubal.edu.tn'),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/fr',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: 'Lycée Privé Asdrubal - Excellence & Bienveillance',
    description: 'Lycée Privé Asdrubal - enseignement de qualité, activités riches, admissions ouvertes. Contactez-nous pour une visite.',
    url: 'https://asdrubal.edu.tn',
    siteName: 'Lycée Privé Asdrubal',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Lycée Privé Asdrubal',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lycée Privé Asdrubal - Excellence & Bienveillance',
    description: 'Lycée Privé Asdrubal - enseignement de qualité, activités riches, admissions ouvertes. Contactez-nous pour une visite.',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
