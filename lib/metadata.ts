import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  image = "/opengraph.jpg",
  type = "website",
  publishedTime,
}: SEOProps): Metadata {
  const url = `https://www.homekeep.qa${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: "Homekeep Qatar",
      locale: "en_QA",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
