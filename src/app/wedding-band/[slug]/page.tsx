import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PRICING } from "@/config/pricing";
import { WHATSAPP_URL } from "@/config/contact";
import { SITE, abs, jsonLd } from "@/config/site";
import { VENUES, getVenue, venuePath, type Venue } from "@/content/venues";

const gbp = (n: number) => `£${n.toLocaleString("en-GB")}`;

export const generateStaticParams = () => VENUES.map((v) => ({ slug: v.slug }));

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const venue = getVenue(params.slug);
  if (!venue) return {};

  const title = `Wedding Band at ${venue.name}, ${venue.town} | The JB Experience`;
  const description = `Live wedding band for ${venue.name} in ${venue.town}, ${venue.county} — a venue we have performed at. Solo from ${gbp(
    PRICING.soloPrice,
  )}, full band from ${gbp(PRICING.trioPrice)}, booked direct with no agency fees.`;

  return {
    title,
    description,
    keywords: `wedding band ${venue.name}, live band ${venue.name}, ${venue.name} wedding music, wedding band ${venue.town}, ${venue.county} wedding band, function band ${venue.name}`,
    alternates: { canonical: abs(venuePath(venue.slug)) },
    openGraph: {
      title,
      description,
      url: abs(venuePath(venue.slug)),
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: SITE.image,
          width: 1200,
          height: 630,
          alt: `The JB Experience performing live at a ${venue.county} wedding`,
        },
      ],
    },
  };
}

/**
 * The questions that decide whether a band fits a room. We ask the couple to
 * put them to the venue rather than publishing answers we do not have — every
 * room in a venue this size is different, and a guessed decibel limit in print
 * is worse than no number at all.
 */
const venueQuestions = [
  {
    q: "Is there a sound limiter, and what is it set to?",
    why: "The decibel setting decides whether the full band works in that room, or whether a duo or an electronic drum kit is the better call. Send us the number and we will tell you straight.",
  },
  {
    q: "What time can the band load in, and when does music have to stop?",
    why: "We need the room for setup and soundcheck before your guests come in. Knowing the curfew lets us place the sets where they do the most good.",
  },
  {
    q: "Where would the band set up, and how much space is there?",
    why: "Tell us the spot and we will confirm the footprint we need, in writing, so you can pass it back to the venue.",
  },
  {
    q: "Is there a power supply near the performance area?",
    why: "Standard domestic sockets are fine for us. We just need to know where they are rather than finding out on the day.",
  },
  {
    q: "Do they need our insurance and equipment certificates?",
    why: "Most venues do. We hold public liability insurance and our equipment is PAT-tested, and we will send the paperwork to your venue directly.",
  },
];

const included = [
  "Our own PA system and stage lighting",
  "2×60 min or 3×40 min live sets",
  "Playlist DJ service between and after the sets",
  "Your first dance learned free",
  "Setup, soundcheck and pack-down",
  "Public liability insurance and PAT-tested equipment",
  "Joe as your direct contact from enquiry to the last song",
];

const faqsFor = (venue: Venue) => [
  {
    question: `Have you played at ${venue.name} before?`,
    answer: `Yes — ${venue.name} is one of the ${venue.county} venues we have performed at. That means we are not a band being briefed on the place from a brochure, and your venue is not dealing with a supplier it has never met.`,
  },
  {
    question: `How much does a wedding band cost at ${venue.name}?`,
    answer: `Booked directly with us: ${gbp(PRICING.soloPrice)} solo, ${gbp(
      PRICING.duoPrice,
    )} duo and ${gbp(
      PRICING.trioPrice,
    )} for the full band, with PA and lighting included. Travel to ${venue.town} is added from our East London base at ${gbp(
      PRICING.baseTravelCostPerMile,
    )} per mile for the first musician plus a smaller rate per additional player, and our quote form works out the exact figure for ${venue.name} before you commit to anything.`,
  },
  {
    question: `Can you work with a sound limiter at ${venue.name}?`,
    answer: `Usually, yes. Ask ${venue.name} whether the room you are using has a limiter and what it is set to, then send us the number. We will tell you honestly whether the full band suits that setting or whether a duo or an electronic-kit setup will sound better — rather than turning up and discovering it mid-set.`,
  },
  {
    question: `How long do you play for at a ${venue.town} wedding?`,
    answer: "Two 60-minute sets or three 40-minute sets, whichever fits your running order better. A playlist DJ service covers the gaps and keeps going after we finish, so the room never falls silent.",
  },
  {
    question: "Do we have to book through an agency?",
    answer: `No, and it costs you more if you do. The same act is listed with an entertainment agency from £1,729; direct with us the full band is ${gbp(
      PRICING.trioPrice,
    )} — identical musicians, identical performance, no commission in the middle.`,
  },
];

export default function VenuePage({ params }: { params: { slug: string } }) {
  const venue = getVenue(params.slug);
  if (!venue) notFound();

  const faqs = faqsFor(venue);
  const others = VENUES.filter((v) => v.slug !== venue.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Wedding band at ${venue.name}`,
    serviceType: "Live wedding and function band",
    provider: { "@id": `${SITE.url}/#organization` },
    url: abs(venuePath(venue.slug)),
    areaServed: {
      "@type": "Place",
      name: venue.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: venue.town,
        addressRegion: venue.county,
        addressCountry: "GB",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: PRICING.soloPrice,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: PRICING.soloPrice,
        maxPrice: PRICING.trioPrice,
        priceCurrency: "GBP",
      },
      url: abs("/prices"),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />

      <div className="min-h-screen bg-white dark:bg-ink-900">
        {/* Hero */}
        <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="eyebrow mb-4 text-gold-400">
              {venue.town}, {venue.county}
            </p>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
              Wedding Band at {venue.name}
            </h1>
            <p className="mb-8 text-lg opacity-90 sm:text-xl">
              A venue we have played. Live music for your wedding at {venue.name}, booked
              directly with the band from {gbp(PRICING.soloPrice)} — no agency commission in
              between.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#booking-form"
                className="transform rounded-full bg-gold-500 px-8 py-4 text-lg font-semibold text-ink-900 transition-all duration-300 hover:scale-105 hover:bg-gold-400"
              >
                Check your date &amp; price
              </Link>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-ink-900"
              >
                Message on WhatsApp
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Free quote including travel · Reply within 24 hours · No obligation
            </p>
          </div>
        </section>

        <Breadcrumbs
          trail={[
            ["Venues", "/wedding-band"],
            [venue.name, venuePath(venue.slug)],
          ]}
        />

        {/* The honest hook */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="mb-6 text-3xl font-bold text-ink-900 dark:text-white">
              We have performed at {venue.name}
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {venue.character} If you have booked it, you have already made the hard decision.
              What is left is finding a band that will fill the dance floor rather than politely
              empty it.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {venue.name} is a {venue.type.toLowerCase()} holding {venue.capacity}, and it is one
              of the{" "}
              <Link
                href={venue.countyPath}
                className="font-semibold text-gold-600 underline-offset-4 hover:underline dark:text-gold-400"
              >
                {venue.county} venues
              </Link>{" "}
              we have played. You will deal with Joe directly from your first message to the last
              song of the night — no account manager, no agency relaying answers, and no commission
              added for the privilege.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
                >
                  <span className="mt-1 text-gold-500" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-neutral-50 py-16 dark:bg-ink-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-ink-900 dark:text-white">
                What a band at {venue.name} costs
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300">
                Published prices, plus travel to {venue.town}. Nothing hidden until the invoice.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: "Solo", price: PRICING.soloPrice, note: "Ceremonies, receptions, smaller rooms" },
                { name: "Duo", price: PRICING.duoPrice, note: "Relaxed evenings and tighter volume limits" },
                { name: "Full Band", price: PRICING.trioPrice, note: "Vocals & guitar, bass, drums — for a packed floor" },
              ].map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl border border-gold-200 bg-white p-8 text-center dark:border-gold-800 dark:bg-ink-900"
                >
                  <h3 className="mb-2 text-xl font-bold text-ink-900 dark:text-white">{p.name}</h3>
                  <div className="mb-2 text-4xl font-bold text-gold-600 dark:text-gold-400">
                    {gbp(p.price)}
                  </div>
                  <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
                    + travel from East London
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300">{p.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="mb-5 text-neutral-600 dark:text-neutral-400">
                Travel is calculated at {gbp(PRICING.baseTravelCostPerMile)} per mile from our East
                London base, plus a smaller rate for each additional musician. Our quote form works
                out the exact figure for {venue.name}.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/#booking-form"
                  className="inline-flex items-center justify-center rounded-lg bg-ink-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-ink-800 dark:bg-gold-500 dark:text-ink-900 dark:hover:bg-gold-400"
                >
                  Get a price for {venue.name}
                </Link>
                <Link
                  href="/prices"
                  className="inline-flex items-center justify-center rounded-lg border border-ink-900 px-8 py-3 font-semibold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink-900"
                >
                  See the full price list
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What to ask the venue */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="mb-3 text-3xl font-bold text-ink-900 dark:text-white">
              Five questions worth asking {venue.name}
            </h2>
            <p className="mb-8 text-lg text-neutral-600 dark:text-neutral-300">
              Every room in a venue this size behaves differently, so we would rather you had the
              venue&apos;s own answers than our guesses. Send us what they say and we will tell you
              exactly what will work.
            </p>
            <ol className="space-y-6">
              {venueQuestions.map((item, i) => (
                <li
                  key={item.q}
                  className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-ink-800"
                >
                  <h3 className="mb-2 flex gap-3 text-lg font-semibold text-ink-900 dark:text-white">
                    <span className="text-gold-600 dark:text-gold-400">{i + 1}.</span>
                    {item.q}
                  </h3>
                  <p className="pl-7 text-neutral-700 dark:text-neutral-300">{item.why}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-50 py-16 dark:bg-ink-800">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-ink-900 dark:text-white">
              {venue.name}: common questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-ink-900"
                >
                  <summary className="cursor-pointer list-none font-semibold text-ink-900 marker:content-none dark:text-white">
                    <span className="flex items-start justify-between gap-4">
                      {faq.question}
                      <span
                        className="mt-0.5 text-gold-500 transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other venues + onward links */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="mb-3 text-2xl font-bold text-ink-900 dark:text-white">
              Other venues we have played
            </h2>
            <p className="mb-8 text-neutral-600 dark:text-neutral-300">
              Not booked {venue.name}? We cover London, Essex and Hertfordshire — and we travel
              beyond, with travel costed honestly from E10.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((v) => (
                <Link
                  key={v.slug}
                  href={venuePath(v.slug)}
                  className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-gold-400 dark:border-neutral-700 dark:bg-ink-800 dark:hover:border-gold-500"
                >
                  <span className="block font-semibold text-ink-900 dark:text-white">{v.name}</span>
                  <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                    {v.town}, {v.county}
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-10 text-neutral-600 dark:text-neutral-300">
              Want to know what we actually play?{" "}
              <Link
                href="/songs"
                className="font-semibold text-gold-600 underline-offset-4 hover:underline dark:text-gold-400"
              >
                Browse the full setlist
              </Link>
              , or read the{" "}
              <Link
                href="/blog/booking-a-wedding-band-london-checklist"
                className="font-semibold text-gold-600 underline-offset-4 hover:underline dark:text-gold-400"
              >
                booking checklist
              </Link>{" "}
              before you brief anyone.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-gold-600 to-gold-500 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Playing {venue.name} on your date?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Tell us the date and we will come back within 24 hours with availability and a price
              including travel to {venue.town}.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#booking-form"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-ink-900 transition-colors hover:bg-neutral-100"
              >
                Check your date &amp; price
              </Link>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-ink-900"
              >
                Message on WhatsApp
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-80">
              Also covering {venue.nearby.join(", ")} and the rest of {venue.county}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
