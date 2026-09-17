/**
 * WhatsApp integration constants & helpers
 * Dedicated contact number: +84 3386 49 908 (International: 84338649908)
 */

export const WHATSAPP_PHONE = '84338649908';
export const WHATSAPP_DISPLAY = '+84 3386 49908';

/**
 * Builds a direct wa.me link with optional pre-filled message
 */
export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_PHONE}`;
  if (!message || !message.trim()) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}
