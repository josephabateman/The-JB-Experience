import { Metadata } from "next";
import Link from "next/link";
import { PRICING } from "@/config/pricing";
import { WHATSAPP_URL } from "@/config/contact";

export const metadata: Metadata = {
  title: "Christmas Party Band London | Festive Corporate & Office Party Entertainment | The JB Experience",
  description: `Live Christmas party band for hire in London — office parties, corporate festive events & private celebrations. Festive classics plus floor-fillers, PA & lighting included. Book direct from £${PRICING.soloPrice}.`,
  keywords:
    "Christmas party band London, office Christmas party entertainment, corporate Christmas party band, festive band hire London, Christmas party live music, company Christmas party band, December party band London",
  alternates: { canonical: "https://www.thejbexperience.co.uk/christmas-party-band-london" },
  openGraph: {
    title: "Christmas Party Band London | Corporate & Office Festive Entertainment",
    description:
      "Live Christmas party band in London for office parties, corporate festive events and private celebrations. Festive classics plus floor-fillers. Book direct, no agency fees.",
    url: "https://www.thejbexperience.co.uk/christmas-party-band-london",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/images/band-performing.jpg", width: 1200, height: 630, alt: "The JB Experience — Christmas party band in London" }],
  },
};

const highlights = [
  { title: "Festive classics + floor-fillers", body: "Michael Bublé, Wham! and Christmas favourites woven through the pop, rock and soul hits that pack a dance floor." },
  { title: "Office & corporate parties", body: "The polished, reliable live act your staff party deserves — trusted by clients including Hilton." },
  { title: "PA & lighting included", body: "Full sound system and stage lighting as standard, plus a playlist DJ service between sets." },
  { title: "Book direct & save up to 30%", body: "No agency fees — deal directly with the band and keep more of your festive budget." },
];

export default function ChristmasPartyBandPage() {
  return (
    <main className="bg-white dark:bg-ink-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Christmas Party Band Hire — The JB Experience",
            serviceType: "Christmas & festive party live band",
            areaServed: ["London", "Essex", "Hertfordshire", "Kent", "Surrey"],
            provider: { "@type": "MusicGroup", name: "The JB Experience", url: "https://www.thejbexperience.co.uk" },
            description:
              "Live Christmas party band for hire in London — office parties, corporate festive events and private celebrations across London and the South East.",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-900 px-4 pt-32 pb-20 text-center sm:px-6">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow mb-3 text-gold-300">Christmas parties · London</p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
            Christmas party band for hire in London
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-300">
            Make your office or corporate Christmas party unforgettable with a high-energy live band —
            festive classics plus the floor-fillers that keep every department dancing. Booked direct,
            with no agency fees.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/#booking-form" className="btn-gold w-full sm:w-auto">
              Check your Christmas date
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              Message on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-400">★★★★★ 5-star rated · BBC Radio featured · December dates book up fast — enquire early</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">The festive floor-filler</p>
            <h2 className="text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">The band that makes the Christmas party</h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              From the works do to a private festive celebration, we bring the energy that turns a
              good night into the one everyone talks about in January.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-ink-800">
                <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{h.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Solo from £{PRICING.soloPrice.toLocaleString()} · Duo from £{PRICING.duoPrice.toLocaleString()} · Full band from £{PRICING.trioPrice.toLocaleString()}. Corporate bookings quoted individually.
            </p>
            <div className="mt-6">
              <Link href="/corporate-events" className="font-medium text-gold-600 underline-offset-2 hover:underline dark:text-gold-400">
                See all corporate entertainment →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-serif text-3xl font-bold text-white sm:text-4xl">Lock in your Christmas party date</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-300">
                December fills up months ahead. Send your date and venue and we&apos;ll reply within 24 hours with availability and a tailored quote.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/#booking-form" className="btn-gold w-full sm:w-auto">Get a festive quote</Link>
                <Link href="/" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10 sm:w-auto">
                  See the band
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
