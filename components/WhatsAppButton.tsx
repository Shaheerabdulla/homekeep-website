"use client";

import { CONVERSION_LABELS, trackAdConversion } from "@/lib/gtag";

export default function WhatsAppButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = "https://wa.me/97450002548";

    trackAdConversion(CONVERSION_LABELS.WHATSAPP_CLICK, 50.0);

    setTimeout(() => {
      window.location.href = url;
    }, 300);
  };

  return (
    <a href="https://wa.me/97450002548" onClick={handleClick}>
      Chat on WhatsApp
    </a>
  );
}
