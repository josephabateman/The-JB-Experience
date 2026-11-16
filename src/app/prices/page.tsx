import type { Metadata } from "next";
import Link from "next/link";
import { PRICING, PERFORMANCE_DESCRIPTIONS, corporatePrice } from "@/config/pricing";

const SITE = "https://www.thejbexperience.co.uk";
const gbp = (n: number) => `£${n.toLocaleString("en-GB")}`;

export const metadata: Metadata = {
  title: `Wedding Band Prices London | From ${gbp(PRICING.soloPrice)} | The JB Experience`,
  description: `Transparent wedding and function band prices for London, Essex & Hertfordshire. Solo from ${gbp(PRICING.soloPrice)}, duo from ${gbp(PRICING.duoPrice)}, full band from ${gbp(PRICING.trioPrice)} — PA and lighting included, booked direct with no agency commission.`,
  keywords:
    "wedding band prices London, how much does a wedding band cost, function band hire cost London, live band prices UK, wedding band cost 2026, corporate band hire price London",
  alternates: { canonical: `${SITE}/prices` },
  openGraph: {
    title: `Wedding Band Prices London — From ${gbp(PRICING.soloPrice)}`,
    description:
      "Real prices, published up front. PA and lighting included, no agency commission. London, Essex & Hertfordshire.",
    url: `${SITE}/prices`,
    type: "website",
    images: [{ url: "/images/band-performing.jpg", width: 1200, height: 630, alt: "The JB Experience performing live" }],
  },
};

const packages = [
  {
    name: "Solo",
    price: PRICING.soloPrice,
    tagline: "One performer, surprisingly big sound",
    description: PERFORMANCE_DESCRIPTIONS.solo,
    best: "Ceremonies, drinks receptions, smaller venues and tighter budgets",
    featured: false,
  },
  {
    name: "Duo",
    price: PRICING.duoPrice,
    tagline: "Vocals/guitar plus a second instrument",
    description: PERFORMANCE_DESCRIPTIONS.duo,
    best: "Relaxed evenings, venues with space or volume limits",
    featured: false,
  },
  {
    name: "Full Band",
    price: PRICING.trioPrice,
    tagline: "Lead vocals & guitar, bass, drums",
    description: PERFORMANCE_DESCRIPTIONS.trio,
    best: "Packed dance floors — weddings, corporate parties, big celebrations",
    featured: true,
  },
];

const included = [
  "Professional PA system",
  "Stage lighting",
  "2×60 min or 3×40 min live sets",
  "Playlist DJ service between and after sets",
  "Your first dance learned free (weddings)",
  "Setup, soundcheck and pack-down",
  "Public liability insurance & PAT-tested equipment",
  "Direct contact with the band throughout",
];

const addOns = [
  { name: "Saxophone with the full band", price: gbp(PRICING.saxPrice) },
  { name: "Ceremony performance (solo)", price: `from ${gbp(PRICING.ceremonySoloFrom)}` },
  { name: "Cocktail hour (duo)", price: `from ${gbp(PRICING.cocktailHourDuoFrom)}` },
  { name: "Manned DJ set after the band (1 hour)", price: gbp(PRICING.mannedDjSet) },
];

const faqs = [
  {
    question: "How much does a wedding band cost in London?",
    answer: `Professional London wedding bands typically range from about £1,200 to £3,500 for an evening performance. Our direct prices start at ${gbp(PRICING.soloPrice)} for solo, ${gbp(PRICING.duoPrice)} for duo and ${gbp(PRICING.trioPrice)} for the full band, with PA and lighting included.`,
  },
  {
    question: "Are these prices really all-inclusive?",
    answer: `The package price covers the performance, PA, lighting, setup and the playlist service. Travel is added based on distance from our East London base at ${gbp(PRICING.baseTravelCostPerMile)} per mile for the first musician plus a smaller per-mile rate for each additional player, with the congestion charge where it applies. Our quote form calculates this for your venue so there are no surprises.`,
  },
  {
    question: "Why are you cheaper than agency listings?",
    answer: `Because there is no commission in between. Entertainment agencies add roughly 20–40% on top of a band's own fee for their service. The same act listed through an agency starts at £1,729; booked directly with us the full band starts at ${gbp(PRICING.trioPrice)} — the same musicians and the same performance.`,
  },
  {
    question: "Do corporate events cost more than weddings?",
    answer: `Yes. Corporate bookings are quoted at a premium over our wedding rates, reflecting longer days, stricter requirements and additional coordination — full band from about ${gbp(corporatePrice(PRICING.trioPrice))}. Every corporate event is quoted individually.`,
  },
  {
    question: "What deposit do you take?",
    answer: "A deposit secures your date, with the balance due before the event. Exact terms are set out in your booking contract, which you receive before paying anything.",
  },
  {
    question: "Can you work with a venue sound limiter?",
    answer: "Usually yes. Tell us the decibel setting when you enquire and we will tell you honestly whether the full band will work or whether a duo or electronic-kit setup is the better option for your venue.",
  },
];

export default function PricesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Live band hire — weddings, corporate events and parties",
            serviceType: "Live music entertainment",
            provider: { "@type": "MusicGroup", name: "The JB Experience", url: SITE },
            areaServed: ["London", "Essex", "Hertfordshire", "Kent", "Surrey"],
            offers: packages.map((p) => ({
              "@type": "Offer",
              name: `${p.name} performance`,
              description: p.description,
              price: p.price,
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
              url: `${SITE}/prices`,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Prices", item: `${SITE}/prices` },
            ],
          }),
        }}
      />

      <main className="bg-white pt-24 dark:bg-ink-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="py-10 text-center sm:py-14">
            <p className="eyebrow mb-3">Pricing</p>
            <h1 className="mx-auto max-w-3xl text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
              Wedding &amp; function band prices, published up front
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              Most band sites make you fill in a form before they tell you anything. Here are our
              actual prices for London, Essex and Hertfordshire — PA and lighting included, booked
              direct with no agency commission on top.
            </p>
          </header>

          {/* Package cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all hover:shadow-lg dark:bg-ink-800 ${
                  pkg.featured
                    ? "border-gold-400 ring-1 ring-gold-400"
                    : "border-neutral-200 dark:border-neutral-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-bold text-ink-900 dark:text-white">
                    {pkg.name}
                  </h2>
                  {pkg.featured && (
                    <span className="rounded-full bg-gold-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-gold-700 dark:bg-gold-900/40 dark:text-gold-300">
                      Most booked
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{pkg.tagline}</p>

                <p className="mt-5 font-serif text-4xl font-bold text-ink-900 dark:text-white">
                  {gbp(pkg.price)}
                  <span className="ml-1.5 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    from
                  </span>
                </p>

                <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {pkg.description}
                </p>

                <div className="mt-5 flex-1 rounded-xl bg-neutral-50 p-4 dark:bg-ink-900/60">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Best for
                  </p>
                  <p className="mt-1.5 text-sm text-neutral-700 dark:text-neutral-300">{pkg.best}</p>
                </div>

                <Link
                  href="/#booking-form"
                  className={`mt-6 ${pkg.featured ? "btn-gold" : "btn-ghost"} w-full`}
                >
                  Check your date
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
            Prices are for an evening performance. Travel is calculated from our East London base and
            shown in your quote — never added later.{" "}
            <Link href="/corporate-events" className="font-medium text-gold-600 underline-offset-2 hover:underline dark:text-gold-400">
              Corporate events are quoted separately →
            </Link>
          </p>

          {/* Included */}
          <section className="mt-16">
            <h2 className="text-center text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
              What every booking includes
            </h2>
            <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs font-bold text-gold-700 dark:bg-gold-900/40 dark:text-gold-300"
                  >
                    ✓
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Add-ons */}
          <section className="mt-16">
            <h2 className="text-center text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
              Optional extras
            </h2>
            <div className="mx-auto mt-8 max-w-2xl divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
              {addOns.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-4 bg-white px-5 py-4 dark:bg-ink-800"
                >
                  <span className="text-neutral-700 dark:text-neutral-300">{item.name}</span>
                  <span className="flex-shrink-0 font-semibold text-ink-900 dark:text-white">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Direct vs agency */}
          <section className="mt-16 rounded-3xl bg-ink-900 px-6 py-12 sm:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-3 text-gold-400">Why book direct</p>
              <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                The same band, without the commission
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                Entertainment agencies do real work — vetting acts and handling contracts — and they
                charge roughly 20–40% commission for it. Our act is listed with an agency too, where
                it starts at £1,729. Booked directly here, the full band starts at{" "}
                <span className="font-semibold text-white">{gbp(PRICING.trioPrice)}</span>.
              </p>
              <p className="mt-4 text-neutral-400">
                Same musicians. Same equipment. Same performance. You just talk to the band instead
                of an account manager.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/#booking-form" className="btn-gold w-full sm:w-auto">
                  Get your free quote
                </Link>
                <Link
                  href="/blog/how-much-does-a-wedding-band-cost-london"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
                >
                  Read the full cost guide
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-16 mb-16">
            <h2 className="text-center text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
              Pricing questions
            </h2>
            <div className="mx-auto mt-8 max-w-3xl space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-ink-800"
                >
                  <summary className="cursor-pointer list-none font-semibold text-ink-900 marker:hidden dark:text-white">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span
                        aria-hidden="true"
                        className="flex-shrink-0 text-gold-600 transition-transform group-open:rotate-180 dark:text-gold-400"
                      >
                        ▾
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
