import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://homekeep.qa";
  const services = [
    "ac-service",
    "ahu-servicing",
    "fcu-servicing",
    "chiller-maintenance",
    "plumbing",
    "swimming-pool-maintenance",
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/amc`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
