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

  const areas = ["doha", "lusail", "pearl-qatar", "simaisma", "west-bay"];

  const blogPosts = [
    "ac-not-cooling-qatar",
    "ac-service-cost-qatar-2026",
    "amc-vs-pay-per-visit-qatar",
    "amc-worth-it-qatar",
    "chiller-vs-split-ac-qatar",
    "common-plumbing-problems-qatar-villas",
    "how-often-ac-service-qatar",
    "lusail-villa-maintenance-checklist-2026",
    "pearl-qatar-villa-maintenance-checklist-2026",
    "prepare-ac-qatar-summer-2026",
    "ramadan-maintenance-checklist-qatar",
    "signs-fcu-needs-cleaning",
    "signs-you-need-a-plumber-qatar-villa",
    "water-heater-maintenance-qatar",
    "west-bay-apartment-ac-maintenance",
    "what-is-ahu-servicing",
    "winter-maintenance-checklist-qatar",
  ];

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
