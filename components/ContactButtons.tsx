"use client";

import { trackAdConversion, CONVERSION_LABELS } from "@/lib/gtag";

interface ContactButtonProps {
  phoneNumber?: string; // Format: 974XXXXXXXX
  message?: string;
  className?: string;
}

export function WhatsAppButton({
  phoneNumber = "97450002548",
  message = "Hello Homekeep Qatar, I need assistance with AC servicing.",
  className = "",
}: ContactButtonProps) {
  const handleWhatsAppClick = () => {
    trackAdConversion(CONVERSION_LABELS.WHATSAPP_CLICK);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors ${className}`}
    >
      <span>💬 Chat on WhatsApp</span>
    </button>
  );
}

export function DirectCallButton({
  phoneNumber = "97450002548",
  className = "",
}: ContactButtonProps) {
  const handlePhoneClick = () => {
    trackAdConversion(CONVERSION_LABELS.PHONE_CLICK);
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <button
      onClick={handlePhoneClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors ${className}`}
    >
      <span>📞 Call Now (+974)</span>
    </button>
  );
}
