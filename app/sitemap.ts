import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://agenciapaliza.com",
      lastModified: new Date("2025-04-01"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
