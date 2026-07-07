"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRICING, PERFORMANCE_DESCRIPTIONS } from "@/config/pricing";

const packages = [
  {
    key: "trio",
    name: "Full Band",
    price: PRICING.trioPrice,
    tagline: "Lead vocals & guitar, bass, drums",
    description: PERFORMANCE_DESCRIPTIONS.trio,
    media: { type: "video" as const, src: "https://www.youtube.com/embed/b7RNiZ3eUxc", title: "The JB Experience — Full Band Performance" },
    featured: true,
  },
  {
    key: "duo",
    name: "Duo",
    price: PRICING.duoPrice,
    tagline: "Vocals/guitar + second instrument",
    description: PERFORMANCE_DESCRIPTIONS.duo,
    media: { type: "image" as const, src: "/images/joe-cristian-ceremony.jpg", title: "The JB Experience — Duo performance at a wedding ceremony" },
    featured: false,
  },
  {
    key: "solo",
    name: "Solo",
    price: PRICING.soloPrice,
    tagline: "Solo with live loop-pedal technology",
    description: PERFORMANCE_DESCRIPTIONS.solo,
    media: { type: "video" as const, src: "https://www.youtube.com/embed/OVvikoc0chk", title: "Joe Bateman — Solo performance with live looping" },
    featured: false,
  },
];

const included = [
  { title: "Professional PA & lighting", body: "Full sound system and stage lighting included as standard." },
  { title: "Live looping technology", body: "Innovative stompbox setup for a bigger sound from fewer players." },
  { title: "Your first dance, learned free", body: "We learn your special songs and read the room all night." },
  { title: "Book direct, no agency fees", body: "Deal with the band directly and save up to 30%." },
];

export const AboutSection = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="section bg-white dark:bg-ink-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">About the band</p>
          <h2 className="text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
            London&apos;s band for weddings, corporate events &amp; parties
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            Based in East London and serving London, Essex &amp; Hertfordshire, The JB Experience is
            led by Joe Bateman — a BBC Radio-featured artist with years of experience at major venues
            including Hilton Hotels. From intimate ceremonies to packed corporate dance floors, we
            tailor every performance to your event.
          </p>

          {/* Event types — signals versatility & year-round availability */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {["Weddings", "Corporate events", "Christmas parties", "Birthdays", "Anniversaries", "Private parties"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-ink-800 dark:text-neutral-300"
                >
                  {tag}
                </span>
              )
            )}
          </div>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Planning a company event or Christmas party?{" "}
            <Link href="/corporate-events" className="font-medium text-gold-600 underline-offset-2 hover:underline dark:text-gold-400">
              See corporate entertainment →
            </Link>
          </p>
        </div>

        {/* Package cards */}
        <div className="mt-14">
          <h3 className="mb-8 text-center text-2xl font-bold text-ink-900 dark:text-white">
            Choose your line-up
          </h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.key}
                className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-lg dark:bg-ink-800 ${
                  pkg.featured
                    ? "border-gold-400 ring-1 ring-gold-400"
                    : "border-neutral-200 dark:border-neutral-700"
                }`}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-ink-700">
                  {pkg.media.type === "video" ? (
                    <iframe
                      className="h-full w-full"
                      src={pkg.media.src}
                      title={pkg.media.title}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <Image
                      src={pkg.media.src}
                      alt={pkg.media.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-xl font-bold text-ink-900 dark:text-white">
                      {pkg.name}
                    </h4>
                    {pkg.featured && (
                      <span className="rounded-full bg-gold-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-gold-700 dark:bg-gold-900/40 dark:text-gold-300">
                        Most popular
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{pkg.tagline}</p>
                  <p className="mt-4 font-serif text-3xl font-bold text-ink-900 dark:text-white">
                    £{pkg.price.toLocaleString()}
                    <span className="ml-1 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                      from
                    </span>
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {pkg.description}
                  </p>
                  <Link
                    href="/#booking-form"
                    className={`mt-6 ${pkg.featured ? "btn-gold" : "btn-ghost"} w-full`}
                  >
                    Check availability
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
            Saxophone available with the full band for an extra £{PRICING.saxPrice}. Corporate events quoted individually.
          </p>
        </div>

        {/* What's included */}
        <div className="mt-16">
          <div className="text-center">
            <button
              onClick={() => setShowDetails((v) => !v)}
              className="btn-ghost"
              aria-expanded={showDetails}
            >
              {showDetails ? "Hide what's included" : "See what's included"}
              <span className="text-xs">{showDetails ? "↑" : "↓"}</span>
            </button>
          </div>

          {showDetails && (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {included.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-ink-800"
                >
                  <h4 className="font-serif text-base font-bold text-ink-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{item.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
