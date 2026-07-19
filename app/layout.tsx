import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: {
    default: "AC Service Qatar | AC Repair Doha | FCU & Chiller Maintenance | Homekeep",
    template: "%s | Homekeep Qatar",
  },
  description:
    "Homekeep — expert AC service in Qatar and Doha. FCU servicing, chiller maintenance, AHU repair and plumbing for villas in Pearl Qatar, Lusail, West Bay & Simaisma. Call +974 50306582.",
  metadataBase: new URL("https://homekeep.qa"),
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
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
