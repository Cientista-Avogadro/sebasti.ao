import { MetadataRoute } from 'next';

const baseUrl = process.env.APP_URL || 'https://sebasti.ao';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  // English routes (default, no prefix)
  const enPages = [
    { url: '', priority: 1.0 },
    { url: '/projects', priority: 0.8 },
    { url: '/courses', priority: 0.7 },
    { url: '/gallery', priority: 0.6 },
    { url: '/articles', priority: 0.7 },
  ];

  // Portuguese routes (with prefix)
  const ptPages = [
    { url: '/pt', priority: 1.0 },
    { url: '/pt/projects', priority: 0.8 },
    { url: '/pt/courses', priority: 0.7 },
    { url: '/pt/gallery', priority: 0.6 },
    { url: '/pt/articles', priority: 0.7 },
  ];

  return [...enPages, ...ptPages].map((page) => {
    const isPT = page.url.startsWith('/pt');
    const pathWithoutLocale = isPT ? page.url.replace('/pt', '') : page.url;
    
    return {
      url: `${baseUrl}${page.url}`,
      lastModified: now,
      changeFrequency: (page.url.includes('articles') || page.url === '' || page.url === '/pt' ? 'weekly' : 'monthly') as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority: page.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}${pathWithoutLocale}`,
          'pt-AO': `${baseUrl}/pt${pathWithoutLocale}`,
        },
      },
    };
  });
}
