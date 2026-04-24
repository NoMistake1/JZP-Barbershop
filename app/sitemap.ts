import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jzpbarbershop.cz";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/galerie`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/poukazy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/rezervace`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
