import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.homekeep.qa"),

  title: {
    default:
      "AC Service Qatar | AC Repair Doha | FCU & Chiller Maintenance | Homekeep",
    template: "%s | Homekeep Qatar",
  },

  description:
    "Homekeep provides professional AC service in Qatar and Doha including AC repair, FCU servicing, chiller maintenance, AHU repair and plumbing for villas and apartments in Pearl Qatar, Lusail, West Bay and Simaisma. Call +974 50002548.",

  keywords: [
    "AC service Qatar",
    "AC service Doha",
    "AC repair Qatar",
    "AC repair Doha",
    "FCU servicing Qatar",
    "FCU services Doha",
    "chiller maintenance Qatar",
    "chiller maintenance Doha",
    "AHU servicing Qatar",
    "AC maintenance Pearl Qatar",
    "plumbing Doha",
    "Homekeep Qatar",
  ],

  alternates: {
    canonical: "https://www.homekeep.qa",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },

  openGraph: {
    title: "AC Service Qatar | AC Repair Doha | Homekeep",
    description:
      "Professional AC maintenance, FCU, AHU and chiller services across Qatar.",
    url: "https://www.homekeep.qa",
    siteName: "Homekeep Qatar",
    locale: "en_QA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
