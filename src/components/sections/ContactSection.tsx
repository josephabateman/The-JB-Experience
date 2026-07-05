"use client";

import Link from "next/link";

export const ContactSection = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 text-center sm:px-12">
          {/* Subtle gold glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl" />

          <div className="relative">
            <p className="eyebrow mb-3 text-gold-400">Limited dates each year</p>
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-bold text-white sm:text-4xl">
              Ready to secure your date?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-300">
              Get a fast, no-obligation quote — we reply within 24 hours with availability and pricing.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/#booking-form" className="btn-gold w-full sm:w-auto">
                Get your free quote
              </Link>
              <a
                href="tel:+447939000446"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
              >
                📞 Call 07939 000446
              </a>
            </div>

            <p className="mt-6 text-sm text-neutral-400">
              📍 London · Essex · Hertfordshire · UK &amp; international bookings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
