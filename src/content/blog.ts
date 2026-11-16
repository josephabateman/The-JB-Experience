import { PRICING, corporatePrice } from "@/config/pricing";

export interface BlogPost {
  slug: string;
  title: string;
  /** Used for <title> — can be shorter/keyword-led than the on-page H1 */
  metaTitle: string;
  description: string;
  excerpt: string;
  date: string;          // ISO, publication date
  updated?: string;      // ISO, last meaningful content update
  category: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  /** Rendered as an ordered list of blocks — keeps content data-driven and server-rendered */
  body: Block[];
}

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "cta"; text: string };

const gbp = (n: number) => `£${n.toLocaleString("en-GB")}`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-much-does-a-wedding-band-cost-london",
    title: "How much does a wedding band cost in London?",
    metaTitle: "How Much Does a Wedding Band Cost in London? (2026 Prices)",
    description:
      `Real 2026 London wedding band prices, what drives the cost, and where agency fees come from. Direct band rates from ${gbp(PRICING.soloPrice)}, with no commission added.`,
    excerpt:
      "Most band websites hide their prices behind an enquiry form. Here are the actual numbers for London in 2026 — what a solo, duo and full band cost, what moves the price up, and why agency quotes come in higher.",
    date: "2026-10-14",
    updated: "2026-11-16",
    category: "Pricing",
    readingMinutes: 7,
    image: "/images/band-performing.jpg",
    imageAlt: "The JB Experience performing live at a London wedding reception",
    body: [
      { type: "p", text: "If you have spent an evening clicking through wedding band websites, you will have noticed something: almost none of them tell you the price. You fill in a form, wait a day or two, and get a number with no explanation of how it was reached. That is not an accident — it keeps you in a conversation rather than comparing like for like." },
      { type: "p", text: "So here are our actual prices, and more usefully, an explanation of what sits behind any London band's quote. Even if you book someone else, you will be able to read their quote properly." },

      { type: "h2", text: "The short answer" },
      { type: "p", text: "For a professional London wedding band in 2026, expect a realistic range of roughly £1,200 to £3,500 for an evening performance. Below about £1,000 you are usually looking at semi-professional players or a very small line-up; above about £4,000 you are typically paying either for a large show band with horns and dancers, or for an agency's commission on top of a mid-range band." },
      { type: "p", text: "Our own direct prices sit deliberately at the lower end of the professional bracket:" },
      {
        type: "table",
        head: ["Line-up", "What you get", "From"],
        rows: [
          ["Solo", "Vocals and guitar with live loop-pedal technology — a surprisingly full sound from one performer", gbp(PRICING.soloPrice)],
          ["Duo", "Vocals/guitar plus a second instrument (guitar, cello or cajón)", gbp(PRICING.duoPrice)],
          ["Full band", "Lead vocals and guitar, bass, drums — PA and lighting included", gbp(PRICING.trioPrice)],
          ["Saxophone add-on", "Added to the full band for a bigger, brassier sound", `+${gbp(PRICING.saxPrice)}`],
        ],
      },
      { type: "p", text: "Those are the prices you pay us directly. There is no commission layer on top, because there is no agency in the middle." },

      { type: "h2", text: "What actually drives the price" },
      { type: "h3", text: "1. The number of musicians" },
      { type: "p", text: "This is the single biggest factor, and it is close to linear. Every additional player is another professional fee, another share of travel, another input on the PA, and more setup time. A five-piece is not slightly more expensive than a three-piece — it is meaningfully more." },
      { type: "p", text: "It is also why live looping is worth asking about. A solo performer with a loop pedal builds up guitar, bass lines, percussion and vocal harmonies in real time, which gets you much closer to a band sound than the headcount suggests." },

      { type: "h3", text: "2. How long you need them" },
      { type: "p", text: "Standard for most London bands is two 60-minute sets, or three 40-minute sets, across the evening. Asking a band to also cover your ceremony and drinks reception means a longer day, and usually a higher fee or a separate acoustic package." },

      { type: "h3", text: "3. Travel and logistics" },
      { type: "p", text: `We are based in East London (E10) and charge ${gbp(PRICING.baseTravelCostPerMile)} per mile for the first musician plus a smaller per-mile rate for each additional player, with the congestion charge added where it applies. Long journeys may add a distance surcharge, and genuinely distant venues may need overnight accommodation. Any band that quotes a flat London price and then adds travel later is not being straight with you — ask up front.` },

      { type: "h3", text: "4. The date" },
      { type: "p", text: "Saturdays between May and September are the most contested dates in the calendar. A Friday, a Sunday, or anything between November and March gives you far more choice and often a better rate. If your date is flexible even by one day, say so when you enquire — it is the easiest money you will save." },

      { type: "h2", text: "Where agency fees come from" },
      { type: "p", text: "Entertainment agencies do real work: they vet acts, handle contracts, and give you someone to call if a band pulls out. That service is paid for with commission, typically 20–40% added on top of the band's own fee." },
      { type: "p", text: "You can see this clearly in our own case. Our act is listed with an agency as well as on this site. The agency listing starts at £1,729. Booked directly with us, the same full band starts at " + gbp(PRICING.trioPrice) + " — the same musicians, the same equipment, the same performance." },
      { type: "quote", text: "If a band is listed on an agency site and has its own website, it is always worth checking both. The difference is usually the commission, not the quality." },
      { type: "p", text: "The honest trade-off: booking direct means you are dealing with the band rather than an account manager, and you are relying on that band's own professionalism and contract. For an established act with a public review history, most couples find that an easy trade." },

      { type: "h2", text: "What should be included — and what to check" },
      { type: "p", text: "Before you compare two quotes, make sure they cover the same things. Ask every band you speak to:" },
      {
        type: "ul",
        items: [
          "Is a PA system included, or hired separately? (Ours is included.)",
          "Is stage lighting included? (Ours is included.)",
          "Will they learn your first dance song, and is there a fee? (For us it is free for weddings.)",
          "What happens between sets — silence, a playlist, or a DJ service?",
          "How much space and power do they need, and have they checked your venue's restrictions?",
          "Do they carry public liability insurance and PAT-tested equipment? Many venues require both.",
          "What is the deposit, and what are the cancellation terms on both sides?",
        ],
      },
      { type: "p", text: "That last point matters more than people expect. Venues increasingly ask for insurance certificates and electrical testing documentation before they will let a band load in, and a band that cannot produce them on request is a risk to your day." },

      { type: "h2", text: "Is a band worth it over a DJ?" },
      { type: "p", text: "A good DJ costs less and can play anything ever recorded. A band costs more and plays a finite set. What you are paying for with live music is the thing a playlist cannot do: people watching musicians play, reacting to the room, and raising the energy in a way that pulls guests onto the floor who had no intention of dancing." },
      { type: "p", text: "Plenty of weddings do both — a band for the first two hours of the evening, then a playlist or DJ set to carry on afterwards. We include a playlist DJ service between and after sets for exactly that reason." },

      { type: "h2", text: "Getting an accurate number for your wedding" },
      { type: "p", text: "Prices on any website are a starting point. The number that matters is the one for your venue, your date and your timings. Our quote form asks for those three things and gives you a figure including travel, so you can compare properly rather than guess." },
      { type: "cta", text: "Check your date and get a full quote" },
    ],
  },

  {
    slug: "live-band-vs-dj-wedding",
    title: "Live band vs DJ for your wedding: an honest comparison",
    metaTitle: "Live Band vs DJ for a Wedding: Honest Pros, Cons & Costs",
    description:
      "A working musician's honest comparison of a live wedding band and a DJ — cost, atmosphere, song choice, space and timings — including when a DJ is genuinely the better call.",
    excerpt:
      "We are a band, so we are hardly neutral. But there are weddings where a DJ is the better choice, and pretending otherwise helps nobody. Here is the real comparison.",
    date: "2026-09-22",
    category: "Planning",
    readingMinutes: 6,
    image: "/images/joe-cristian-ceremony.jpg",
    imageAlt: "Acoustic duo performing at a wedding ceremony",
    body: [
      { type: "p", text: "We play in a wedding band, so treat the following with appropriate suspicion. But we have also played at enough weddings to have watched DJs do a better job than a band would have, and it seems more useful to say so than to pretend live music always wins." },

      { type: "h2", text: "The straight comparison" },
      {
        type: "table",
        head: ["", "Live band", "DJ"],
        rows: [
          ["Typical London cost", `${gbp(PRICING.soloPrice)}–${gbp(3500)}`, "£400–£1,200"],
          ["Song range", "A finite set, usually 40–80 songs", "Essentially unlimited"],
          ["Atmosphere", "A performance people watch and gather around", "Continuous, seamless music"],
          ["Space needed", "3m × 2m minimum, more for bigger line-ups", "A table and a couple of speakers"],
          ["Breaks", "Sets with gaps between (usually filled with a playlist)", "Continuous all night"],
          ["Volume control", "Limited by acoustic drums unless using electronic kit", "Precisely adjustable"],
          ["Requests on the night", "Only from the known repertoire", "Almost anything"],
        ],
      },

      { type: "h2", text: "What a band genuinely does better" },
      { type: "p", text: "The honest case for live music is not that the songs sound better — a recording of Stevie Wonder will always out-sing a covers band on Stevie Wonder. It is that the room behaves differently." },
      { type: "p", text: "People stand and watch live musicians. They cheer at the end of songs. Guests who would never dance to a playlist will stand near the stage because something is happening there, and from standing to dancing is a much shorter step than from sitting to dancing. A band gives the evening a centre of gravity and a shape — a build, a peak, an encore." },
      { type: "p", text: "A band also reads the room in real time. If the floor is thinning, we change what comes next. If a particular song lands, we stretch it. That is judgement applied live, and it is most of what you are paying for." },

      { type: "h2", text: "When a DJ is the better choice" },
      { type: "p", text: "There are several, and any band that tells you otherwise is selling:" },
      {
        type: "ul",
        items: [
          "Your budget is genuinely tight. A good DJ at £800 beats a cheap band at £800 almost every time — a band at that price is cutting corners somewhere.",
          "Your guests' music taste is very specific or very broad — heavy on dance, hip-hop, garage, bhangra or chart music that needs the original production to work.",
          "Your venue has a strict decibel limiter. Acoustic drums can trip a limiter and cut the power mid-song, which is a miserable way to spend your evening. Some bands (including us) can work around this, but a DJ sidesteps it entirely.",
          "The space is genuinely small. A full band needs real floor area, and taking it from the dance floor is self-defeating.",
          "You want music running continuously from 7pm to 1am with no breaks at all.",
        ],
      },

      { type: "h2", text: "The option most couples actually want" },
      { type: "p", text: "Both. A band for the first part of the evening, when energy needs to be built and guests need a reason to leave their tables, then recorded music to carry things to the end of the night." },
      { type: "p", text: "This is why most professional bands now include a playlist or DJ service. We run a playlist between and after our sets, taking requests, so the music never stops but you are not paying for a separate DJ booking. If you want a full manned DJ set afterwards, that is available as an add-on rather than built into everyone's price." },

      { type: "h2", text: "Questions worth asking either one" },
      {
        type: "ul",
        items: [
          "Have you played our venue before, and do you know its sound restrictions?",
          "What happens if you are ill on the day — who covers, and how?",
          "Do you have public liability insurance and PAT-tested equipment?",
          "How much setup time do you need, and can you set up before guests arrive?",
          "Can we give you a do-not-play list as well as a request list?",
        ],
      },
      { type: "p", text: "The last one is underrated. Being clear about what you do not want played saves more awkward moments than any request list." },
      { type: "cta", text: "See our line-ups and check your date" },
    ],
  },

  {
    slug: "corporate-event-band-hire-london-cost",
    title: "Corporate event entertainment in London: what it costs and how to brief a band",
    metaTitle: "Corporate Band Hire London: Costs & How to Brief a Band",
    description:
      "What live music for a corporate event actually costs in London, why it is priced above weddings, and the brief that gets you an accurate quote first time.",
    excerpt:
      "Corporate bookings are quoted differently from weddings, and most briefs leave out the three things that actually determine the price. Here is what to send.",
    date: "2026-11-04",
    category: "Corporate",
    readingMinutes: 6,
    image: "/images/jb-experience-full-band-london-event.jpg",
    imageAlt: "The JB Experience performing at a corporate event in London",
    body: [
      { type: "p", text: "Booking entertainment for a company event is a different job from booking it for a wedding. You are working to a budget someone else signs off, a venue you may not have seen, and an audience whose taste you cannot survey. The quotes you get back are often hard to compare because every band prices corporate work slightly differently." },
      { type: "p", text: "Here is how the pricing works, and what to put in your brief so the number you get back is one you can actually take to finance." },

      { type: "h2", text: "Why corporate is priced above weddings" },
      { type: "p", text: `Most professional bands apply a premium of roughly 20–35% over their wedding rate for corporate work. Ours is ${Math.round((PRICING.corporateMultiplier - 1) * 100)}%, which puts the full band from ${gbp(corporatePrice(PRICING.trioPrice))}. That is not opportunism — it reflects real differences:` },
      {
        type: "ul",
        items: [
          "Longer days. Corporate events frequently want background music through a drinks reception or dinner as well as an evening set.",
          "Stricter logistics. Load-in windows, security clearance, risk assessments, method statements and insurance certificates all take time that weddings rarely require.",
          "More stakeholders. Briefs change. A wedding has two decision-makers; a company event can have five, and the running order often shifts twice before the day.",
          "Earlier setup. You usually cannot sound-check in front of delegates, so the band arrives and sets up well before guests do.",
          "Invoice terms. Corporate bookings are typically invoiced with payment terms rather than paid by deposit and balance, which carries cost.",
        ],
      },
      { type: "p", text: "If a band quotes you the same as their wedding price for a corporate event, check what they have assumed about timings — they may have priced an evening set only." },

      { type: "h2", text: "What a London corporate booking typically costs" },
      {
        type: "table",
        head: ["Format", "Typical use", "From"],
        rows: [
          ["Solo / acoustic", "Drinks reception, dinner background, awards interludes", gbp(corporatePrice(PRICING.soloPrice))],
          ["Duo", "Relaxed evening, summer socials, smaller venues", gbp(corporatePrice(PRICING.duoPrice))],
          ["Full band", "Christmas parties, launches, post-awards dance floor", gbp(corporatePrice(PRICING.trioPrice))],
        ],
      },
      { type: "p", text: "Those figures include PA, lighting, setup and a playlist service between sets. Travel is added from our East London base and shown separately in the quote. Some agencies quote the band fee alone and add production later — always ask what is excluded, not just what is included." },

      { type: "h2", text: "The brief that gets an accurate quote first time" },
      { type: "p", text: "Most enquiries arrive with a date and a guest count, which is not enough to price. These seven lines are:" },
      {
        type: "ul",
        items: [
          "Date, venue name and postcode.",
          "Event type — Christmas party, awards dinner, launch, conference close, summer social.",
          "Guest numbers, and whether they are staff, clients or a mix.",
          "The exact music windows you want covered: reception, dinner, post-speeches, evening.",
          "Load-in time available, and any security or access restrictions.",
          "Whether the venue has a decibel limiter, and at what level.",
          "Who signs off, and whether you need an invoice with payment terms.",
        ],
      },
      { type: "p", text: "That last point catches people out more than anything else. If your company needs 30-day terms and a purchase order, say so at enquiry stage, not after you have agreed a price." },

      { type: "h2", text: "Briefing the music itself" },
      { type: "p", text: "A corporate crowd is the most mixed audience a band plays to. Graduate intake and board members are in the same room, and nobody has chosen to be there the way wedding guests have." },
      { type: "p", text: "What works: a broad, familiar repertoire that spans decades rather than a narrow genre. What does not: asking a band to play exclusively current chart music to a room with a thirty-year age range, or exclusively Motown to a room of twenty-somethings." },
      { type: "p", text: "Give the band two things — a short do-not-play list, and any songs tied to your company (a brand anthem, an MD's favourite, something from a campaign). Both are more useful than a long wish list." },

      { type: "h2", text: "Timing your booking" },
      { type: "p", text: "Christmas party season is the tightest market in the calendar. Good bands are booked for the first two weeks of December by about September, and often much earlier. If you are reading this in autumn for a December event, enquire now and be flexible on the day of the week — a Wednesday in early December is far easier to fill than the second Friday." },
      { type: "p", text: "Summer parties, launches and awards dinners are more forgiving, but 3–4 months is still a comfortable lead time for London." },

      { type: "h2", text: "Booking direct versus through an agency" },
      { type: "p", text: "Agencies are genuinely useful for corporate buyers: a single contract, a vetted roster, and someone accountable if an act fails. Those are real procurement advantages and for some organisations they are decisive." },
      { type: "p", text: "The trade-off is commission of roughly 20–40% on top of the band's fee, and a layer between you and the people actually playing. If your brief is detailed or likely to change, talking to the band directly tends to be faster and cheaper." },
      { type: "cta", text: "Get a corporate quote with travel included" },
    ],
  },

  {
    slug: "how-long-should-a-wedding-band-play",
    title: "How long should a wedding band play?",
    metaTitle: "How Long Should a Wedding Band Play? Set Times That Work",
    description:
      "Standard wedding band set lengths explained — two 60s or three 40s, when to start, what happens between sets, and how to build a timeline that survives a real wedding day.",
    excerpt:
      "Two 60-minute sets or three 40s? When should the first dance be? Set lengths are standard across the industry, but where you place them makes the difference between a full dance floor and an empty one.",
    date: "2026-10-28",
    category: "Planning",
    readingMinutes: 5,
    image: "/images/live-band-packed-dance-floor-london.jpg",
    imageAlt: "Guests dancing to a live wedding band in London",
    body: [
      { type: "p", text: "Almost every professional wedding band in the UK offers the same two options: two 60-minute sets, or three 40-minute sets. Both add up to roughly two hours of live music across the evening. The question is not really how long — it is where those sets sit in your day." },

      { type: "h2", text: "Two 60s or three 40s?" },
      {
        type: "table",
        head: ["", "Two 60-minute sets", "Three 40-minute sets"],
        rows: [
          ["Feels like", "Two big blocks with one clear break", "A steadier presence across the evening"],
          ["Best for", "Evenings starting later, around 8pm", "Longer evenings, or music needed from early on"],
          ["Risk", "One long gap in the middle", "Energy dips if breaks are badly placed"],
          ["Guests leaving early", "They may miss the second set entirely", "Everyone catches at least two sets"],
        ],
      },
      { type: "p", text: "If a meaningful number of guests will leave before midnight — older relatives, people with children, anyone travelling — three 40s is usually the better call, because more of your guests see the band." },

      { type: "h2", text: "When should the band start?" },
      { type: "p", text: "The most common mistake is starting too late. Couples worry about the band finishing before the night ends, so they push the first set back — and the dance floor never gets going because guests have settled into conversations at their tables." },
      { type: "p", text: "A pattern that works reliably: speeches end, room turns over, first dance happens at the very start of the band's first set. The band carries straight on from the first dance into upbeat material while everyone is already standing and watching. You get a full floor from the first song instead of spending twenty minutes coaxing people up." },

      { type: "h2", text: "What happens between sets" },
      { type: "p", text: "Silence between sets kills a dance floor faster than anything else. Guests sit down, conversations restart, and the band has to rebuild from nothing." },
      { type: "p", text: "Ask every band what they provide. Most professional acts run a playlist through their own PA during breaks, often taking requests — we do, and it is included rather than an add-on. If a band has no answer to this question, you will need a DJ or a phone and an aux cable, and someone to manage it." },

      { type: "h2", text: "A timeline that survives the day" },
      { type: "p", text: "Wedding days run late. Dinner service slips, speeches overrun, and the schedule you agreed in month three meets reality. Build slack in:" },
      {
        type: "ul",
        items: [
          "Let the band set up during dinner or speeches, not in the gap immediately before they play.",
          "Do not schedule the first dance for the same minute the band finishes setting up.",
          "Know your venue's curfew, and work backwards from it rather than forwards from dinner.",
          "Agree with the band what gets cut if you run 30 minutes late — it is much easier to decide in advance than at 10pm.",
        ],
      },

      { type: "h2", text: "Do you need music earlier in the day too?" },
      { type: "p", text: `Ceremony and drinks-reception music is usually a separate booking, because it is a different job — quieter, acoustic, and hours before the evening set. We price it separately (${gbp(PRICING.ceremonySoloFrom)} for a solo ceremony performance, ${gbp(PRICING.cocktailHourDuoFrom)} for a duo through a drinks reception) rather than building it into everyone's evening price.` },
      { type: "p", text: "Booking it with the same act has a practical advantage beyond cost: they are already on site, already set up, and already know your timeline." },

      { type: "h2", text: "What about an encore?" },
      { type: "p", text: "Most bands will play one if the room wants it and the curfew allows. Worth agreeing in advance whether an encore is included or whether overrunning costs extra, so nobody is negotiating at midnight." },
      { type: "cta", text: "Talk through your timeline and get a quote" },
    ],
  },
  {
    slug: "booking-a-wedding-band-london-checklist",
    title: "Booking a wedding band in London: a practical checklist",
    metaTitle: "How to Book a Wedding Band in London: Step-by-Step Checklist",
    description:
      "When to book, what to ask, what should be in the contract, and the venue requirements that catch couples out. A practical checklist from a working London wedding band.",
    excerpt:
      "Booking live music is mostly straightforward, but a handful of things reliably catch people out — venue sound limiters, insurance paperwork, and timings that do not survive contact with a real wedding day.",
    date: "2026-08-05",
    category: "Planning",
    readingMinutes: 6,
    image: "/images/band-profile.jpg",
    imageAlt: "The JB Experience band profile photograph",
    body: [
      { type: "p", text: "Most of booking a band is simple: find one you like, check they are free, pay a deposit. The parts that cause problems are the ones nobody mentions until the week of the wedding. This is the checklist we wish every couple had." },

      { type: "h2", text: "When to book" },
      { type: "p", text: "For a Saturday between May and September in London, good bands are commonly booked 9–18 months ahead. For a Friday, Sunday or off-season date, 4–6 months is usually comfortable." },
      { type: "p", text: "That said, late availability genuinely happens — dates fall through, and a band with a gap would rather fill it than not. If your wedding is three months away, it is still worth asking. Do not assume you have missed the window." },

      { type: "h2", text: "Before you enquire, know these four things" },
      {
        type: "ul",
        items: [
          "Your date, and whether it is flexible at all.",
          "Your venue name and postcode — it determines travel cost and sound restrictions.",
          "Roughly when you want music to start and finish.",
          "Your guest count, which affects the line-up that will fill the room.",
        ],
      },
      { type: "p", text: "With those four, any competent band can give you a real quote rather than a range. Without them you will get a brochure." },

      { type: "h2", text: "The venue questions that catch people out" },
      { type: "h3", text: "Sound limiters" },
      { type: "p", text: "Many London and Home Counties venues have a decibel limiter wired to the power supply. Exceed the threshold and the electricity cuts out mid-song. Limiters set at 90dB or below are difficult for a band with acoustic drums; below 85dB, a conventional full band is effectively impossible without adaptation." },
      { type: "p", text: "Ask your venue for the limiter setting in writing and pass it to your band before you pay a deposit. A band that knows about it in advance can bring an electronic kit or adjust the line-up. A band that finds out on the day cannot." },

      { type: "h3", text: "Curfew and load-out" },
      { type: "p", text: "Find out when music must stop, and when the band must be out of the building. These are often different times, and the second one matters for the band's travel." },

      { type: "h3", text: "Access, parking and power" },
      { type: "p", text: "Marquees, barns and upper-floor rooms can mean a long carry with heavy equipment. Ask about parking, the distance from vehicle to stage, whether there is a lift, and how many 13A sockets are available near the performance area." },

      { type: "h3", text: "Insurance and PAT testing" },
      { type: "p", text: "A growing number of venues require the band's public liability insurance certificate and evidence of PAT-tested equipment before load-in. Ask your band for both early and forward them to your venue — it takes five minutes in month one and is a crisis in the final week." },

      { type: "h2", text: "What should be in the contract" },
      {
        type: "ul",
        items: [
          "The exact date, venue address and performance times, including set lengths.",
          "The agreed line-up — how many musicians, and on what instruments.",
          "The total fee, the deposit, and when the balance is due.",
          "What is included: PA, lighting, playlist between sets, first dance learning.",
          "Cancellation terms for both sides, and what happens if a musician is ill (a professional band carries deputies).",
          "Arrival and setup time, and what the band needs from the venue.",
        ],
      },

      { type: "h2", text: "Timings that survive a real wedding day" },
      { type: "p", text: "Wedding days run late. Speeches overrun, dinner service slips, and the band's start time moves. Build slack in: avoid scheduling the first dance for the exact minute the band finishes setting up, and give your band a realistic rather than optimistic timeline." },
      { type: "p", text: "A practical pattern that works well: band set up during dinner or speeches, first dance at the start of the first set, two sets across the evening with a playlist in between, and recorded music to the curfew." },

      { type: "h2", text: "Choosing between two bands you like" },
      { type: "p", text: "Watch unedited live footage rather than a showreel — showreels are cut to the best four seconds of every song. Read reviews that mention specifics (what the band did when something went wrong) rather than reviews that say \"amazing\". And notice how they communicate during the enquiry: the band that replies clearly and promptly now is the band that will do the same in the week of your wedding." },
      { type: "cta", text: "Check our availability for your date" },
    ],
  },
];

export const getPost = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((p) => p.slug === slug);

export const sortedPosts = (): BlogPost[] =>
  [...BLOG_POSTS].sort((a, b) => +new Date(b.date) - +new Date(a.date));
