'use client';

interface JsonLdProps {
  data: any;
}

const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Schema pour l'organisation
export const OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Lycée Privé Asdrubal',
  alternateName: 'École Privée Asdrubal',
  description: 'Lycée privé tunisien offrant une éducation de qualité de la maternelle au lycée',
  url: 'https://asdrubal.edu.tn',
  logo: 'https://asdrubal.edu.tn/images/logo.png',
  image: 'https://asdrubal.edu.tn/images/og-default.jpg',
  telephone: '+216 XX XXX XXX',
  email: 'contact@asdrubal.edu.tn',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Avenue Habib Bourguiba',
    addressLocality: 'Tunis',
    addressCountry: 'TN',
    postalCode: '1000'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '36.8065',
    longitude: '10.1815'
  },
  foundingDate: '1995',
  numberOfStudents: '1200',
  slogan: 'Excellence & Bienveillance',
  sameAs: [
    'https://www.facebook.com/lyceeasdrubal',
    'https://www.instagram.com/lyceeasdrubal',
    'https://www.twitter.com/lyceeasdrubal'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Programmes Éducatifs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Enseignement Primaire',
          description: 'Programme éducatif pour les élèves de CP à CM2'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Collège',
          description: 'Programme éducatif pour les élèves de 6ème à 3ème'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Lycée',
          description: 'Programme éducatif pour les élèves de 2nde à Terminale'
        }
      }
    ]
  }
};

// Schema pour les événements
export const EventSchema = (event: any) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.title,
  description: event.description,
  startDate: event.startDate,
  endDate: event.endDate,
  location: {
    '@type': 'Place',
    name: 'Lycée Privé Asdrubal',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Avenue Habib Bourguiba',
      addressLocality: 'Tunis',
      addressCountry: 'TN'
    }
  },
  organizer: {
    '@type': 'Organization',
    name: 'Lycée Privé Asdrubal',
    url: 'https://asdrubal.edu.tn'
  },
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode'
});

// Schema pour les articles
export const ArticleSchema = (article: any) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.excerpt,
  image: article.image,
  datePublished: article.date,
  dateModified: article.date,
  author: {
    '@type': 'Organization',
    name: 'Lycée Privé Asdrubal'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lycée Privé Asdrubal',
    logo: {
      '@type': 'ImageObject',
      url: 'https://asdrubal.edu.tn/images/logo.png'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://asdrubal.edu.tn/news/${article.id}`
  }
});

// Schema pour le breadcrumb
export const BreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Schema pour FAQ
export const FAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export default JsonLd;
