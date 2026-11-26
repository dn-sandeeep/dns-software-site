import data from '@/data/portfolio.json';

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${data.siteUrl}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...data.projects.map((p) => ({
      url: `${data.siteUrl}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
