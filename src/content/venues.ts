/**
 * Venue pages: the venues Joe has actually performed at.
 *
 * These exist to catch "wedding band <venue name>" searches — someone running
 * that query has already booked the venue, which makes them the warmest traffic
 * on the site and is a query the agencies largely ignore.
 *
 * HONESTY RULE, please keep it: a venue only belongs in this list once Joe has
 * confirmed he has played there, because every page says so in as many words.
 * The descriptions stay at the level of what the venue publicly is — its
 * character, its town, roughly how many guests it holds. Nothing here asserts a
 * decibel limit, a load-in route, a stage position or a power supply, because
 * those are specific to each room and we do not have them. The pages instead
 * tell the couple which questions to put to the venue and promise an honest
 * answer back, which is true and more useful than a guessed number.
 */

export interface Venue {
  slug: string;
  /** The venue's name as people write it. */
  name: string;
  town: string;
  county: "Essex" | "Hertfordshire";
  /** The regional page this venue sits under. */
  countyPath: string;
  /** What kind of venue it is, in plain words. */
  type: string;
  /** Rough guest capacity, as the venue is generally described. */
  capacity: string;
  /** One line of publicly-known character. No technical claims. */
  character: string;
  /** Towns nearby, for the local-intent copy. */
  nearby: string[];
}

export const VENUES: Venue[] = [
  {
    slug: "the-grove",
    name: "The Grove",
    town: "Watford",
    county: "Hertfordshire",
    countyPath: "/wedding-band-hertfordshire",
    type: "Five-star country estate hotel",
    capacity: "300+ guests",
    character:
      "A grand Hertfordshire estate on the edge of Watford, and one of the largest wedding venues within easy reach of London.",
    nearby: ["Watford", "Rickmansworth", "St Albans", "Hemel Hempstead"],
  },
  {
    slug: "hanbury-manor",
    name: "Hanbury Manor",
    town: "Ware",
    county: "Hertfordshire",
    countyPath: "/wedding-band-hertfordshire",
    type: "Jacobean-style country house hotel",
    capacity: "200+ guests",
    character:
      "A country house hotel and golf resort near Ware, with the kind of high-ceilinged formal rooms that suit a full band.",
    nearby: ["Ware", "Hertford", "Bishop's Stortford", "Stevenage"],
  },
  {
    slug: "gaynes-park",
    name: "Gaynes Park",
    town: "Epping",
    county: "Essex",
    countyPath: "/wedding-band-essex",
    type: "Georgian estate with a barn and orangery",
    capacity: "150+ guests",
    character:
      "A Georgian estate just outside Epping, with gardens and a converted barn — one of the best-known wedding venues in west Essex.",
    nearby: ["Epping", "Chigwell", "Harlow", "Loughton"],
  },
  {
    slug: "down-hall",
    name: "Down Hall",
    town: "Hatfield Heath",
    county: "Essex",
    countyPath: "/wedding-band-essex",
    type: "Country house hotel",
    capacity: "200+ guests",
    character:
      "An Italianate country house hotel set in parkland at Hatfield Heath, on the Essex–Hertfordshire border.",
    nearby: ["Hatfield Heath", "Bishop's Stortford", "Harlow", "Sawbridgeworth"],
  },
  {
    slug: "prested-hall",
    name: "Prested Hall",
    town: "Colchester",
    county: "Essex",
    countyPath: "/wedding-band-essex",
    type: "Tudor manor house and estate",
    capacity: "120+ guests",
    character:
      "A moated Tudor manor near Colchester, with a marquee lawn as well as rooms inside the house.",
    nearby: ["Colchester", "Witham", "Braintree", "Chelmsford"],
  },
];

export const getVenue = (slug: string) => VENUES.find((v) => v.slug === slug);

export const venuePath = (slug: string) => `/wedding-band/${slug}`;

/**
 * Resolve a venue label used elsewhere on the site to its page, if it has one.
 *
 * The regional pages spell some venues more formally than the venue pages do
 * ("Down Hall Country House Hotel" against plain "Down Hall"), so match on the
 * shorter canonical name appearing inside the longer label rather than on
 * equality. Returns null for venues without a page — we only publish a page
 * once Joe has confirmed he has played there.
 */
export const venuePageForName = (label: string): string | null => {
  const needle = label.toLowerCase();
  const match = VENUES.find((v) => needle.includes(v.name.toLowerCase()));
  return match ? venuePath(match.slug) : null;
};
