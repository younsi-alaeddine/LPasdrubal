import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://asdrubal.edu.tn/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /portal/teacher/
Disallow: /portal/student/

# Allow public portals
Allow: /portal/parent/

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
