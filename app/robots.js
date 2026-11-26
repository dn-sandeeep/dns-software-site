import data from '@/data/portfolio.json';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${data.siteUrl}/sitemap.xml`,
  };
}
