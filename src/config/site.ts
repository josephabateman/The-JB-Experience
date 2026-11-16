import { PRICING } from "@/config/pricing";

/**
 * Single source of truth for site-wide identity and structured data.
 *
 * Search engines resolve a business to one "entity" by matching consistent
 * signals across pages and profiles. Previously the name, area and offers were
 * retyped in several places with slightly different wording; now every page
 * builds its JSON-LD from here.
 */
export const SITE = {
  url: "https://www.thejbexperience.co.uk",
  name: "The JB Experience",
  alternateName: "Joe Bateman Band",
  tagline: "London wedding, corporate and party band",
  description:
    "Live band for weddings, corporate events and parties across London, Essex and Hertfordshire. Solo, duo or full band, booked direct with no agency fees.",
  locality: "London",
  region: "Greater London",
  postalCode: "E10",
  country: "GB",
  latitude: 51.5693,
  longitude: -0.0146,
  /** Radius served, in metres (~40 miles). */
  serviceRadius: 64374,
  areaServed: ["London", "Essex", "Hertfordshire", "Kent", "Surrey"],
  /**
   * Only verified profiles belong here — a wrong URL in sameAs actively
   * confuses entity resolution rather than helping it.
   */
  sameAs: [
    "https://www.instagram.com/joebatemanofficial",
    "https://www.youtube.com/@JoeBatemanOfficialYouTube",
    "https://open.spotify.com/artist/6h3c0qpAfr6AiM53MFozVQ",
    "https://linktr.ee/joebatemanofficial",
  ],
  image: "/images/band-performing.jpg",
} as const;

export const abs = (path: string) => `${SITE.url}${path}`;

/** The band as a performing entity, plus the local-business facts Google needs. */
export const musicGroupSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["MusicGroup", "LocalBusiness"],
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: SITE.alternateName,
  description: SITE.description,
  url: SITE.url,
  logo: abs(SITE.image),
  image: abs(SITE.image),
  slogan: "Live music that fills your dance floor",
  genre: ["Pop", "Rock", "Soul", "Motown", "Funk", "Wedding Music"],
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.latitude,
    longitude: SITE.longitude,
  },
  areaServed: [
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: SITE.latitude,
        longitude: SITE.longitude,
      },
      geoRadius: String(SITE.serviceRadius),
    },
    ...SITE.areaServed.map((a) => ({ "@type": "AdministrativeArea", name: a })),
  ],
  priceRange: `£${PRICING.soloPrice}-£${PRICING.trioPrice}`,
  currenciesAccepted: "GBP",
  member: [
    { "@type": "Person", name: "Joe Bateman", jobTitle: "Lead Vocalist & Guitarist" },
  ],
  sameAs: [...SITE.sameAs],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Live music packages",
    url: abs("/prices"),
    itemListElement: [
      {
        "@type": "Offer",
        name: "Solo performance",
        description: "Solo vocals and guitar with live loop-pedal technology",
        price: PRICING.soloPrice,
        priceCurrency: "GBP",
        url: abs("/prices"),
      },
      {
        "@type": "Offer",
        name: "Duo performance",
        description: "Vocals and guitar plus a second instrument",
        price: PRICING.duoPrice,
        priceCurrency: "GBP",
        url: abs("/prices"),
      },
      {
        "@type": "Offer",
        name: "Full band performance",
        description: "Lead vocals and guitar, bass and drums, with PA and lighting included",
        price: PRICING.trioPrice,
        priceCurrency: "GBP",
        url: abs("/prices"),
      },
    ],
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: abs("/#booking-form"),
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
    result: { "@type": "Reservation", name: "Live music booking" },
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: "en-GB",
  publisher: { "@id": `${SITE.url}/#organization` },
});

/** Breadcrumbs: [["Prices", "/prices"]] — "Home" is prepended automatically. */
export const breadcrumbSchema = (trail: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    ...trail.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 2,
      name,
      item: abs(path),
    })),
  ],
});

/** Renders one or more JSON-LD blocks. */
export const jsonLd = (schema: object) => ({
  __html: JSON.stringify(schema),
});
