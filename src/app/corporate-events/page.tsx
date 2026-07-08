import { Metadata } from "next";
import Link from "next/link";
import { PRICING, corporatePrice } from "@/config/pricing";
import { WHATSAPP_URL } from "@/config/contact";

export const metadata: Metadata = {
  title: "Corporate Event Band London | Christmas & Company Party Entertainment | The JB Experience",
  description: `Professional live band for corporate events across London — Christmas parties, summer parties, product launches, awards dinners & conferences. Trusted by clients including Hilton. Book direct from £${corporatePrice(PRICING.soloPrice)}.`,
  keywords:
    "corporate event band London, corporate entertainment London, Christmas party band London, company party band, product launch band, awards dinner entertainment, conference band, summer party band London, office party live music, corporate function band",
  alternates: { canonical: "https://www.thejbexperience.co.uk/corporate-events" },
  openGraph: {
    title: "Corporate Event Band London | Christmas & Company Party Entertainment",
    description:
      "Live band for corporate events across London — Christmas parties, product launches, awards dinners & summer parties. Trusted by clients including Hilton. Book direct.",
    url: "https://www.thejbexperience.co.uk/corporate-events",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/images/band-performing.jpg", width: 1200, height: 630, alt: "The JB Experience performing at a corporate event in London" }],
  },
};

const eventTypes = [
  { title: "Christmas parties", body: "Festive floor-fillers plus classics — the highlight of your office party season, Nov–Jan." },
  { title: "Summer parties", body: "Relaxed daytime acoustic sets or a full high-energy band for company summer socials." },
  { title: "Product launches", body: "Set the tone and energy for your brand moment with a polished, professional live act." },
  { title: "Awards dinners & galas", body: "Background music through dinner, then a band to fill the dance floor after the ceremony." },
  { title: "Conferences", body: "Drinks-reception music and evening entertainment to close your event on a high." },
  { title: "Team celebrations", body: "Milestones, anniversaries and staff parties — versatile sets for any company occasion." },
];

const whyBook = [
  { title: "Trusted by corporate clients", body: "Performed for clients including Hilton, with polished, reliable, professional delivery." },
  { title: "PA & lighting included", body: "Full sound system and stage lighting as standard — no extra hire, no surprises." },
  { title: "Book direct & save up to 30%", body: "No agency fees. Deal directly with the band and keep your budget where it counts." },
  { title: "Versatile, all-audience repertoire", body: "From laid-back dinner sets to floor-fillers that get every department dancing." },
];

export default function CorporateEventsPage() {
  return (
    <main className="bg-white dark:bg-ink-900">
      {/* Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Corporate Event Entertainment — The JB Experience",
            serviceType: "Corporate event live band",
            areaServed: ["London", "Essex", "Hertfordshire", "Kent", "Surrey"],
            provider: { "@type": "MusicGroup", name: "The JB Experience", url: "https://www.thejbexperience.co.uk" },
            description:
              "Professional live band for corporate events, Christmas parties, product launches, awards dinners and conferences across London and the South East.",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-900 px-4 pt-32 pb-20 text-center sm:px-6">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow mb-3 text-gold-300">Corporate entertainment · London</p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
            The live band your company event deserves
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-300">
            High-energy, professional live music for corporate events across London — Christmas
            parties, product launches, awards dinners, conferences and summer socials. Booked direct,
            with no agency fees.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/#booking-form" className="btn-gold w-full sm:w-auto">
              Get a corporate quote
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
          <p className="mt-6 text-sm text-neutral-400">★★★★★ 5-star rated · BBC Radio featured · Trusted by clients including Hilton</p>
        </div>
      </section>

      {/* Event types */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Every company occasion</p>
            <h2 className="text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">Corporate events we play — all year round</h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              Weddings are seasonal; corporate events aren&apos;t. From the Christmas party rush to
              summer socials and everything between, we keep your people on the dance floor.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((e) => (
              <div key={e.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-ink-800">
                <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-white">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why book */}
      <section className="section bg-neutral-50 dark:bg-ink-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Why companies book us</p>
            <h2 className="text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">Professional, reliable, unforgettable</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyBook.map((w) => (
              <div key={w.title} className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-ink-900">
                <h3 className="font-serif text-base font-bold text-ink-900 dark:text-white">{w.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Line-ups / pricing */}
      <section className="section">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="eyebrow mb-3">Line-ups</p>
          <h2 className="text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">Choose the right size for your event</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-700">
              <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-white">Solo</h3>
              <p className="mt-2 font-serif text-2xl font-bold text-ink-900 dark:text-white">£{corporatePrice(PRICING.soloPrice).toLocaleString()}<span className="text-sm font-normal text-neutral-500"> from</span></p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Live looping — ideal for receptions &amp; smaller functions.</p>
            </div>
            <div className="rounded-2xl border border-gold-400 p-6 ring-1 ring-gold-400">
              <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-white">Full Band</h3>
              <p className="mt-2 font-serif text-2xl font-bold text-ink-900 dark:text-white">£{corporatePrice(PRICING.trioPrice).toLocaleString()}<span className="text-sm font-normal text-neutral-500"> from</span></p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Vocals/guitar, bass &amp; drums — maximum dance-floor energy.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-700">
              <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-white">Duo</h3>
              <p className="mt-2 font-serif text-2xl font-bold text-ink-900 dark:text-white">£{corporatePrice(PRICING.duoPrice).toLocaleString()}<span className="text-sm font-normal text-neutral-500"> from</span></p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Vocals/guitar plus a second instrument — versatile &amp; polished.</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
            Corporate rates; each booking is quoted individually to fit your venue, timings and requirements. Saxophone available with the full band for an extra £{PRICING.saxPrice}.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-serif text-3xl font-bold text-white sm:text-4xl">Planning a company event?</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-300">
                Tell us your date and venue and we&apos;ll reply within 24 hours with availability and a tailored quote.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/#booking-form" className="btn-gold w-full sm:w-auto">Get a corporate quote</Link>
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
