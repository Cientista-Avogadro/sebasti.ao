import { MetadataRoute } from 'next';

const baseUrl = process.env.APP_URL || 'https://sebasti.ao';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  const staticPages = [
    { url: '/en', priority: 1.0, changefreq: 'weekly' as const },
    { url: '/pt', priority: 1.0, changefreq: 'weekly' as const },
    { url: '/en/projects', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/pt/projects', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/en/courses', priority: 0.7, changefreq: 'monthly' as const },
    { url: '/pt/courses', priority: 0.7, changefreq: 'monthly' as const },
    { url: '/en/gallery', priority: 0.6, changefreq: 'monthly' as const },
    { url: '/pt/gallery', priority: 0.6, changefreq: 'monthly' as const },
    { url: '/en/articles', priority: 0.7, changefreq: 'weekly' as const },
    { url: '/pt/articles', priority: 0.7, changefreq: 'weekly' as const },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changefreq,
    priority: page.priority,
    alternates: {
      languages: page.url.startsWith('/en') 
        ? { 'en-US': `${baseUrl}/en`, 'pt-AO': `${baseUrl}/pt` }
        : { 'en-US': `${baseUrl}/en`, 'pt-AO': `${baseUrl}/pt` },
    },
  }));
}
