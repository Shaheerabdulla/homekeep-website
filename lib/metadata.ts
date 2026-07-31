import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

const SITE_URL = "https://www.homekeep.qa";

export function generatePageMetadata({
  title,
  description,
  path,
  image = "/opengraph.jpg",
  type = "website",
  publishedTime,
}: SEOProps): Metadata {

  const url = `${SITE_URL}${path}`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return {

    metadataBase: new URL(SITE_URL),

    title,

    description,

    keywords: [
      "AC service Qatar",
      "AC repair Doha",
      "FCU cleaning Qatar",
      "FCU servicing Doha",
      "AHU maintenance Qatar",
      "chiller maintenance Qatar",
      "HVAC company Qatar",
      "AC maintenance Doha",
      "villa maintenance Qatar",
      "Pearl Qatar AC service",
      "Lusail AC service"
    ],

    authors: [
      {
        name: "Homekeep Improvements"
      }
    ],

    creator: "Homekeep Improvements",

    publisher: "Homekeep Improvements",

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },

    openGraph: {

      type,

      title,

      description,

      url,

      siteName:
        "Homekeep Qatar",

      locale:
        "en_QA",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt:
            "Homekeep Qatar AC Service and HVAC Maintenance"
        }
      ],

      ...(publishedTime && {
        publishedTime
      })

    },


    twitter: {

      card:
        "summary_large_image",

      title,

      description,

      images: [
        imageUrl
      ],

      creator:
        "@homekeepqatar"

    },


    category:
      "HVAC Services Qatar"

  };
}
