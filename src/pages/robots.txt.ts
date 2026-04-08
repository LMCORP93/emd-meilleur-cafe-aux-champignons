import type { APIRoute } from 'astro';
import config from '@/data/site.config';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${config.domain}/sitemap-index.xml`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
