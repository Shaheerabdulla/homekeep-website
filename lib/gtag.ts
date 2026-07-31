// lib/gtag.ts

// Replace AW-123456789 with your actual Google Ads Conversion ID
export const GA_CONVERSION_ID = "AW-123456789"; 

// Replace these string labels with the exact labels generated in Google Ads
export const CONVERSION_LABELS = {
  WHATSAPP_CLICK: "AbCdEfGhIjKlMnOp", // e.g. AW-123456789/AbCdEfGhIjKlMnOp
  PHONE_CLICK: "XyZ1234567890abc",    // e.g. AW-123456789/XyZ1234567890abc
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackAdConversion = (conversionLabel: string, value: number = 0.0) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GA_CONVERSION_ID}/${conversionLabel}`,
      value: value,
      currency: "QAR",
    });
    console.log(`[Google Ads Conversion] Tracked: ${conversionLabel}`);
  }
};
