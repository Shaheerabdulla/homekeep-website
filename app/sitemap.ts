import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://www.homekeep.qa";

  const today = new Date();


  const services = [
    "ac-service",
    "fcu-servicing",
    "ahu-servicing",
    "chiller-maintenance",
    "plumbing",
    "swimming-pool-maintenance",
  ];


  const areas = [
    "doha",
    "pearl-qatar",
    "lusail",
    "west-bay",
    "simaisma",
  ];


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

    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1,
    },


    {
      url: `${baseUrl}/amc`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.95,
    },


    ...services.map((slug)=>({
      url:`${baseUrl}/services/${slug}`,
      lastModified:today,
      changeFrequency:"weekly" as const,
      priority:0.95,
    })),


    ...areas.map((slug)=>({
      url:`${baseUrl}/areas/${slug}`,
      lastModified:today,
      changeFrequency:"weekly" as const,
      priority:0.9,
    })),


    {
      url:`${baseUrl}/blog`,
      lastModified:today,
      changeFrequency:"weekly",
      priority:0.8,
    },


    ...blogPosts.map((slug)=>({
      url:`${baseUrl}/blog/${slug}`,
      lastModified:today,
      changeFrequency:"monthly" as const,
      priority:0.65,
    }))

  ];

}
