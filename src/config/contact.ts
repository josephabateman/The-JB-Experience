// Centralised contact config.
// The phone number is intentionally NOT displayed anywhere on the site — enquiries
// go through the booking form, with WhatsApp as an optional secondary channel.
// The number lives only inside the WhatsApp deep-link (not shown as text).

const WHATSAPP_NUMBER = "447939000446"; // no "+", no spaces — for wa.me links only

export const WHATSAPP_MESSAGE =
  "Hi Joe, I'd like to enquire about live music for my event.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
