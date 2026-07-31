import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Homekeep Qatar | AC Repair & FCU Servicing Doha",
  description: "Fast 24/7 AC repair and FCU chemical cleaning in The Pearl, Lusail, and Doha.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CJQKX3638E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CJQKX3638E');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
