"use client";

import { useEffect } from "react";

/**
 * Delegated analytics for outbound enquiry paths.
 *
 * WhatsApp links appear in the navbar, footer, contact section and five
 * landing pages — several of them server components. One document-level
 * listener tracks them all without converting those pages to client
 * components or duplicating handlers.
 *
 * These fire as GA4 events only. To bid on them in Google Ads, create a
 * second conversion action there and import the event; the form submission
 * remains the primary conversion.
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (!w.gtag) return;

      if (href.startsWith("https://wa.me/")) {
        w.gtag("event", "contact_whatsapp", {
          event_category: "engagement",
          event_label: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
