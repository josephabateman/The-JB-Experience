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

/**
 * Where /review sends people.
 *
 * Set GOOGLE_REVIEW_URL in Vercel to the short link from your Google Business
 * Profile ("Ask for reviews"), which looks like:
 *   https://g.page/r/XXXXXXXXXXXXXX/review
 * That opens the review box directly, already signed in, on mobile.
 *
 * Until it is set, /review falls back to a Google Maps search for the business
 * — not ideal, but it lands people somewhere useful rather than breaking.
 */
const GOOGLE_REVIEW_FALLBACK =
  "https://www.google.com/maps/search/?api=1&query=The+JB+Experience+wedding+band+London";

export const GOOGLE_REVIEW_URL =
  process.env.GOOGLE_REVIEW_URL || GOOGLE_REVIEW_FALLBACK;

/** True once the real Google review link has been configured. */
export const HAS_GOOGLE_REVIEW_LINK = Boolean(process.env.GOOGLE_REVIEW_URL);
