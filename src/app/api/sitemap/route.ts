import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://asdrubal.edu.tn';
  const locales = ['fr', 'ar'];
  
  const staticPages = [
    '',
    '/about',
    '/programs',
    '/admissions',
    '/school-life',
    '/news',
    '/gallery',
    '/contact',
    '/portal/parent',
    '/portal/student',
    '/portal/teacher',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${locales.map(locale => 
    staticPages.map(page => `
  <url>
    <loc>${baseUrl}/${locale}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr${page}"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar${page}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/fr${page}"/>
  </url>`).join('')
  ).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
