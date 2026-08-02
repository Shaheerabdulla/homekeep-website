import Script from "next/script";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://homekeep.qa"),

  title: {
    default:
      "AC Service Qatar | FCU Cleaning & HVAC Maintenance | Homekeep",
    template:
      "%s | Homekeep Qatar"
  },

  description:
    "Homekeep Qatar provides professional AC repair, FCU cleaning, AHU servicing, chiller maintenance, plumbing and electrical services across Doha, Pearl Qatar, Lusail and West Bay.",

  keywords: [
    "AC Service Qatar",
    "AC Repair Doha",
    "FCU Cleaning Qatar",
    "FCU Servicing Doha",
    "AHU Maintenance Qatar",
    "Chiller Maintenance Qatar",
    "HVAC Company Qatar",
    "Villa Maintenance Qatar"
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1
    }
  },

  openGraph: {
    title:
      "AC Service Qatar | FCU Cleaning & HVAC Maintenance | Homekeep",

    description:
      "Professional AC repair, FCU servicing, AHU, chiller maintenance and villa maintenance services in Doha Qatar.",

    url:
      "https://homekeep.qa",

    siteName:
      "Homekeep Improvements",

    locale:
      "en_QA",

    type:
      "website",

    images: [
      {
        url:
          "/opengraph.jpg",
        width:
          1200,
        height:
          630,
        alt:
          "Homekeep Qatar AC Service"
      }
    ]
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "AC Service Qatar | Homekeep",

    description:
      "24/7 AC repair, FCU cleaning, chiller maintenance and HVAC services in Doha Qatar.",

    images:[
      "/opengraph.jpg"
    ]
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <head>

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CJQKX3638E"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config','G-CJQKX3638E');
          `}
        </Script>


      </head>

      <body>
        {children}
      </body>

    </html>
  );
}
