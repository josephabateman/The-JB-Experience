import { MetadataRoute } from 'next'

const baseUrl = 'https://www.thejbexperience.co.uk'

// Only real, indexable pages belong in the sitemap (Google ignores #anchor URLs).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/wedding-band-essex`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/wedding-band-hertfordshire`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/wedding-music-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/music`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
