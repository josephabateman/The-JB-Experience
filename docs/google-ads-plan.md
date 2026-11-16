# Google Ads plan — The JB Experience

Written 16 Nov 2026. Account `AW-16871323737`.

**Read this first:** until the commit "Fix Google Ads conversion tracking before any ad
spend" is deployed, the site records **zero** conversions in Google Ads. Don't spend
anything before that is live and you've confirmed the conversion action is **Active** in
Google Ads (Tools → Conversions). Everything below assumes conversions are tracking.

---

## Why ads make sense for you right now

Two specific reasons, beyond "more traffic":

1. **The site was deindexed during the DNS lapse and is still recovering.** SEO will take
   weeks to months to come back. Ads buy visibility *today* while that happens.
2. **Your price is your weapon and nobody can see it in organic results.** Agencies
   outrank you and hide prices. An ad that says "Full band £1,499 — book direct, no
   agency fees" does your whole argument before the click.

## Why ads might *not* be worth it

Be honest with yourself about this. Wedding entertainment is expensive to advertise
because agencies bid hard and have far deeper pockets. If you can't commit to about
three months of spend plus the discipline to check it weekly, you'll spend £200,
see two enquiries, and conclude ads don't work — when really you just stopped before
there was enough data to act on.

---

## Structure: three campaigns, in priority order

Run them **one at a time** if budget is tight. Campaign 1 first.

### Campaign 1 — Corporate & Christmas (highest value, start here)

This is where your money is. Corporate pays ~30% more, books year-round, and has far
less competition than "wedding band london". It's also your stated business goal.

- **Landing page:** `/corporate-events` (Christmas ads → `/christmas-party-band-london`)
- **Match types:** phrase and exact only. No broad match.

Keywords:

```
"corporate band hire london"
"corporate entertainment london"
"live band for corporate event london"
"christmas party band london"
"office party band hire"
"company party entertainment london"
"awards dinner entertainment london"
"product launch entertainment london"
[corporate band london]
[christmas party band london]
```

**Seasonality note:** you are reading this in mid-November. Christmas keywords are at
peak *right now* and die completely around 20 December. If you only ever run one week of
ads, run it this week on the Christmas terms. Set a calendar reminder to pause them on
20 December and restart them 1 September next year.

### Campaign 2 — Price-intent (cheapest clicks, warmest traffic)

People searching the price are close to booking and nobody else answers them — agencies
deliberately don't. You now have a page built for exactly this query.

- **Landing page:** `/prices`

```
"wedding band prices london"
"how much does a wedding band cost"
"wedding band cost uk"
"function band hire cost"
"live band hire prices london"
"cost to hire a band for a wedding"
[wedding band prices]
[wedding band cost london]
```

### Campaign 3 — Core wedding terms (most expensive, run last)

Only once 1 and 2 are producing. These are the contested, costly terms.

- **Landing page:** `/` (homepage)

```
"wedding band london"
"wedding band essex"          -> /wedding-band-essex
"wedding band hertfordshire"  -> /wedding-band-hertfordshire
"live band for wedding london"
"function band london"
"book wedding band direct"
"wedding band no agency fees"
```

---

## Negative keywords — add these before you spend a penny

This list is the difference between a working account and wasted money. Add at account
level so it applies everywhere.

```
free          jobs          vacancies     hire me       auditions
tribute       karaoke       dj only       disco         bagpipes
string quartet                jazz trio   steel band    ceilidh
course        lessons       school        academy       how to start
salary        wanted        join a band   looking for band members
youtube       lyrics        chords        tabs
cheap         cheapest      budget
```

Two worth explaining:

- **"tribute", "ceilidh", "string quartet"** etc. — people searching these want a
  specific thing you don't offer. The click costs the same as a good one.
- **"cheap"/"cheapest"** — counterintuitive given you compete on price, but these
  searchers want £300 bands and will never pay £1,499. You're *better value*, not cheap.
  That's a different customer.

---

## Ad copy

Google Ads uses Responsive Search Ads: you supply up to 15 headlines and 4 descriptions
and it assembles them. Give it these.

### Corporate campaign

**Headlines**
```
Corporate Band Hire London
Live Band For Company Events
Christmas Party Band, London
Book Direct — No Agency Fees
Full Band From £1,950
PA & Lighting Included
Trusted By Clients Inc. Hilton
5-Star Rated Live Band
Quote Within 24 Hours
Weddings, Corporate & Parties
London, Essex & Hertfordshire
BBC Radio Featured Artist
Dinner Sets To Dance Floor
Invoiced On Company Terms
See Our Prices Up Front
```

**Descriptions**
```
Professional live music for corporate events across London. PA and lighting included, booked direct with no agency commission.
Christmas parties, launches, awards dinners and summer socials. Tell us your date and get a full quote within 24 hours.
We publish our prices. No brochure, no sales call — just the number, including travel, before you commit.
Solo, duo or full band. One act that covers your drinks reception, dinner and the dance floor.
```

### Price campaign

**Headlines**
```
Wedding Band Prices, Published
Full Band From £1,499
Solo From £599, Duo From £1,095
No Agency Commission
See The Actual Price
PA & Lighting Included
Same Band, £230 Less Direct
London, Essex & Hertfordshire
Free Quote Including Travel
First Dance Learned Free
5-Star Rated Wedding Band
Reply Within 24 Hours
```

**Descriptions**
```
Most band sites hide their prices. Ours are published up front — solo, duo and full band, with PA and lighting included.
Booked direct with no agency commission. The same act costs £1,729 through an agency and £1,499 here.
Get a free quote including travel for your venue and date. No obligation, reply within 24 hours.
Serving London, Essex and Hertfordshire from an East London base. 56+ songs, first dance learned free.
```

**Sitelinks** (add to every campaign — they're free extra space and lift click-through):
`Prices` → /prices · `Song list` → /songs · `Corporate` → /corporate-events ·
`Reviews` → /#testimonials

---

## Budget options

CPCs below are **estimates to validate in Keyword Planner**, not quotes. UK wedding
entertainment typically runs £1.50–£4.00 per click; corporate terms are usually cheaper
than core wedding terms because fewer agencies bid on them.

| | **A. Test** | **B. Serious** | **C. Push** |
|---|---|---|---|
| Daily budget | £5 | £10 | £20 |
| Monthly | ~£150 | ~£300 | ~£600 |
| Campaigns | Corporate only | Corporate + Price | All three |
| Clicks/month (est.) | 50–90 | 100–180 | 200–360 |
| Enquiries/month (est.) | 2–5 | 5–9 | 9–18 |
| Bookings/month (est.) | 0–1 | 1–2 | 2–4 |

Enquiry estimates assume a 5% landing-page conversion rate, booking estimates a 20%
enquiry-to-booking rate. **Both are assumptions until your own data replaces them** —
that's the entire point of fixing conversion tracking first.

**The maths that matters:** at option B, one full-band booking at £1,499 covers roughly
five months of ad spend. You don't need volume. You need two or three bookings a year
that you wouldn't otherwise have had.

**My recommendation: start at option A on the corporate campaign only.** Spend £150,
get real CPC and conversion-rate data for *your* account, then decide. Don't scale on
my estimates — scale on your numbers.

---

## Settings that quietly waste money

Google's defaults are built for Google's revenue, not yours.

- **Turn OFF the Display Network and "Search partners".** On by default in some flows.
  Display clicks are cheap, plentiful and almost never convert for this.
- **Location targeting: set to "Presence — people in your targeted locations".** The
  default also targets people merely *interested in* your area, which means paying for
  clicks from anywhere on earth.
- **Target London + Essex + Hertfordshire**, plus Kent and Surrey if you'll travel.
  Exclude everywhere else.
- **Bidding:** start on **Maximise clicks with a CPC cap** (~£2.50) for the first ~30
  conversions. Only switch to Maximise conversions / Target CPA once the account has
  real conversion data — Smart Bidding with no data performs badly.
- **Ad schedule:** evenings and weekends convert best for weddings; weekday working
  hours for corporate. Review after a month, don't guess up front.
- **Turn off "auto-apply recommendations".** It will quietly add broad match keywords.

---

## What to check, and when

**Weekly (10 minutes):** Search Terms report. This shows the *actual* searches that
triggered your ads, which are never quite what you bid on. Add every irrelevant one as a
negative. This single habit is most of the difference between a good account and a bad one.

**Monthly:** cost per conversion by campaign. Pause anything above ~£75 per enquiry
unless it's producing corporate bookings, where the maths is more forgiving.

**After 3 months:** compare cost per booking against your margin and decide honestly
whether to continue, scale, or stop.

---

## Cheaper things to do first, if you'd rather not spend

All free, all higher-certainty than ads:

1. **Refresh the Google Business Profile.** Photos are over 500 days old, hours and
   socials are missing. This affects the local map pack, which is free traffic and
   converts better than ads.
2. **Ask past clients for Google reviews.** You have 5.0 ratings on Encore and Poptop but
   few on Google — and Google reviews are what show in local results. Ten reviews would
   move you more than £300 of ads.
3. **Request indexing** in Search Console for the new `/prices`, `/songs` and blog pages
   as soon as they deploy, rather than waiting to be crawled.
4. **Add the site to your Encore and Poptop profiles** where permitted.

If you only do one thing from this document, do number 2.
