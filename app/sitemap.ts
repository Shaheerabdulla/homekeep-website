import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

function getSlugs(dir: string): string[] {
  const fullPath = path.join(process.cwd(), "app", dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://homekeep.qa";

  const services = getSlugs("services");
  const areas = getSlugs("areas");
  const blogPosts = getSlugs("blog");

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/amc`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...areas.map((slug) => ({
      url: `${baseUrl}/areas/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
