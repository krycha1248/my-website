import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /favicon.ico
Allow: /assets/js/
Allow: /assets/css/
Allow: /assets/images/

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL));
};