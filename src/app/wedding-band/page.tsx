import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PRICING } from "@/config/pricing";
import { WHATSAPP_URL } from "@/config/contact";
import { SITE, abs, jsonLd } from "@/config/site";
import { VENUES, venuePath } from "@/content/venues";

const gbp = (n: number) => `£${n.toLocaleString("en-GB")}`;

export const metadata: Metadata = {
  title: "Wedding Band by Venue | Venues We Have Played | The JB Experience",
  description: `Live wedding band for The Grove, Hanbury Manor, Gaynes Park, Down Hall and Prested Hall. Venues we have actually performed at, booked direct from ${gbp(
    PRICING.soloPrice,
  )} with no agency fees.`,
  keywords:
    "wedding band The Grove, wedding band Hanbury Manor, wedding band Gaynes Park, wedding band Down Hall, wedding band Prested Hall, Essex wedding venue band, Hertfordshire wedding venue band",
  alternates: { canonical: abs("/wedding-band") },
  openGraph: {
    title: "Wedding Band by Venue — Venues We Have Played",
    description:
      "Already booked your venue? Here are the Essex and Hertfordshire venues we have performed at, with prices and the questions worth asking them.",
    url: abs("/wedding-band"),
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: SITE.image,
        width: 1200,
        height: 630,
        alt: "The JB Experience performing live at a wedding",
      },
    ],
  },
};

export default function VenuesIndexPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wedding venues The JB Experience has performed at",
    itemListElement: VENUES.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Wedding band at ${v.name}, ${v.town}`,
      url: abs(venuePath(v.slug)),
    })),
  };

  const byCounty = ["Hertfordshire", "Essex"] as const;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(itemList)} />

      <div className="min-h-screen bg-white dark:bg-ink-900">
        <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="eyebrow mb-4 text-gold-400">By venue</p>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              Venues we have played
            </h1>
            <p className="mb-8 text-lg opacity-90 sm:text-xl">
              Already booked your venue? Start here. These are venues we have actually performed
              at, so you are not briefing a band from a brochure — and your venue is not meeting a
              supplier for the first time on the day.
            </p>
            <Link
              href="/#booking-form"
              className="inline-block transform rounded-full bg-gold-500 px-8 py-4 text-lg font-semibold text-ink-900 transition-all duration-300 hover:scale-105 hover:bg-gold-400"
            >
              Check your date &amp; price
            </Link>
          </div>
        </section>

        <Breadcrumbs trail={[["Venues", "/wedding-band"]]} />

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            {byCounty.map((county) => (
              <div key={county} className="mb-14 last:mb-0">
                <h2 className="mb-6 text-2xl font-bold text-ink-900 dark:text-white">{county}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {VENUES.filter((v) => v.county === county).map((venue) => (
                    <Link
                      key={venue.slug}
                      href={venuePath(venue.slug)}
                      className="group rounded-2xl border border-neutral-200 bg-white p-7 transition-colors hover:border-gold-400 dark:border-neutral-700 dark:bg-ink-800 dark:hover:border-gold-500"
                    >
                      <h3 className="mb-1 text-xl font-bold text-ink-900 group-hover:text-gold-600 dark:text-white dark:group-hover:text-gold-400">
                        {venue.name}
                      </h3>
                      <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
                        {venue.town}, {venue.county} · {venue.capacity}
                      </p>
                      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
                        {venue.character}
                      </p>
                      <span className="font-semibold text-gold-600 dark:text-gold-400">
                        Prices &amp; what to ask them →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-gold-200 bg-gold-50 p-8 dark:border-gold-800 dark:bg-gold-900/20">
              <h2 className="mb-3 text-xl font-bold text-ink-900 dark:text-white">
                Your venue not listed?
              </h2>
              <p className="mb-5 text-neutral-700 dark:text-neutral-300">
                These are the venues with pages, not the limit of where we play. We cover London,
                Essex and Hertfordshire as standard and travel further with the cost calculated
                openly from our East London base at {gbp(PRICING.baseTravelCostPerMile)} per mile.
                Tell us the venue and we will tell you whether we know it.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#booking-form"
                  className="inline-flex items-center justify-center rounded-lg bg-ink-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-ink-800 dark:bg-gold-500 dark:text-ink-900 dark:hover:bg-gold-400"
                >
                  Get a quote for your venue
                </Link>
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-ink-900 px-6 py-3 font-semibold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink-900"
                >
                  Message on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
