import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: Googlebot
Disallow:
Allow: /screwFast/
Crawl-delay: 10

User-agent: Yandex
Disallow:
Allow: /screwFast/
Crawl-delay: 2

User-agent: archive.org_bot
Disallow:
Allow: /screwFast/
Crawl-delay: 2

User-agent: *
Disallow: /

Sitemap: http://localhost:8080/screwFast/sitemap-index.xml
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
