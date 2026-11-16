# Asking past clients for Google reviews

Written 16 Nov 2026.

Your reviews are in the wrong place. You have 5.0 on Encore (12) and Poptop (8), but
few on Google — and Google reviews are what feed the local map pack, which is the free
traffic that converts best. Moving even ten of those clients to Google is worth more
than a month of ads.

---

## Before you send anything: set up the link (one-off, five minutes)

Do not send people to "search for us on Google". Every extra step loses half of them.

**Step 1 — get the Google link.**

1. Open your Google Business Profile (search your own business name while signed in as
   the owner, or go to business.google.com).
2. Find **Ask for reviews** / **Get more reviews**.
3. Copy the short link. It looks like `https://g.page/r/XXXXXXXXXXXX/review`.

**Step 2 — plug it into the site.**

The site now serves `thejbexperience.co.uk/review`, which redirects to that Google
link. Set it once and every template below works:

1. Vercel → the `the-jb-experience` project → **Settings → Environment Variables**
2. Add `GOOGLE_REVIEW_URL` with the `g.page/r/...` link as the value, for Production
3. Save

It takes effect immediately — no redeploy needed. Until you set it, `/review` falls
back to a Google Maps search for the band, so the link never looks broken.

**Step 3 — test it on your own phone.** Open `thejbexperience.co.uk/review` and check
it lands on the review box.

**Why bother with the redirect:** `https://g.page/r/CfX8kL2mQ9/review` looks like spam
in a WhatsApp message and nobody can type it from memory.
`thejbexperience.co.uk/review` is short enough to put in an email signature, read out
at the end of a gig, or print on a card. It also means if the Google link ever
changes, you update one setting instead of chasing old messages.

---

## Two rules worth knowing

**Don't offer anything in exchange.** No discounts, no prize draws, no "£10 off your
next booking". Google explicitly prohibits incentivised reviews and will remove them —
and can penalise the profile.

**Don't filter who you ask.** Asking only the clients you know loved you is called
review gating, and it's against Google's policy. Ask everyone you worked with. Your
work is good; the average will look after itself.

---

## Template 1 — email, client from the last few months

Subject lines, pick one:
- `Thank you again — one small favour?`
- `A quick favour, if you have two minutes`

```
Hi [Name],

Hope you've settled back into normal life after [the wedding / the party / your
event at [venue]] — we had a brilliant time playing for you, and [specific detail:
your crowd did not stop dancing / your first dance song was a lovely one to learn /
the room was still going at the end].

Could I ask a small favour? We're trying to build up our reviews on Google, and a
couple of lines from you would genuinely help people find us.

thejbexperience.co.uk/review

It takes about a minute, and honestly two sentences is plenty — no need to write
an essay.

Either way, thank you for having us. It was a pleasure.

Joe
```

**Fill in the bracketed detail properly.** One real memory from the night is the
difference between a 10% response rate and a 40% one. If you can't remember anything
specific about that booking, say something true and general rather than inventing
a detail.

---

## Template 2 — email, client from a while back

```
Hi [Name],

This is a slightly belated message — we played at [your wedding / your event] at
[venue] back in [month/year], and I've been meaning to get in touch.

We're building up our reviews on Google, and if you still have good memories of the
night, a couple of lines would mean a lot:

thejbexperience.co.uk/review

Completely understand if it's too long ago or you'd rather not — no hard feelings
either way.

Thanks again for having us.

Joe
```

The "completely understand" line matters. It gives people permission to ignore you,
which paradoxically makes more of them respond — it reads as a genuine request rather
than a chase.

---

## Template 3 — WhatsApp or text

Keep it short. Long messages don't get read on a phone.

```
Hi [Name], Joe here from the band at [venue] — hope you're well!

Small favour: we're building up our Google reviews and a couple of lines from
you would really help us out.

thejbexperience.co.uk/review

Takes a minute, and no worries at all if you'd rather not. Thanks again for
having us — great night.
```

---

## Template 4 — the one nudge

Send once, about a week later. Never more than once.

```
Hi [Name], just bumping this in case it got buried — totally fine to ignore if
you'd rather not. Thanks again! Joe
```

---

## How to actually run this

**Send them one at a time.** A BCC blast to forty people gets forty deletions. An
individual message with the venue name in it gets replies. It's slower and it works.

**Do ten a week, not forty in one evening.** A sudden burst of reviews on a profile
that had few can look inorganic, and Google sometimes filters them. A steady trickle
looks like what it is — a working band.

**Start with your warmest clients.** Not to filter who you ask, but because the first
few replies will tell you whether the wording is landing before you've spent your
whole contact list.

**Expect roughly a quarter to respond.** That's normal and it's fine. Forty asks gets
you about ten reviews, which would transform the profile.

---

## Reply to every review you get

Reply to all of them, warmly and briefly, within a few days. Two reasons: it shows
prospective clients you're engaged, and profiles with owner responses tend to perform
better in local results.

```
Thanks [Name] — we had a brilliant time at [venue]. [One specific line about the
night.] Best wishes to you both.
```

For anything less than five stars, reply calmly, don't argue, and offer to take it
offline. Prospective clients read how you handle criticism far more closely than
they read the praise.

---

## Two things to fix on the profile while you're in there

Both are free and both affect ranking:

1. **The photos are over 500 days old.** Upload recent performance shots — the ones
   now in `public/images` are good. Profiles with fresh photos get materially more
   views.
2. **Hours and social links are missing.** Set "by appointment" hours if fixed hours
   don't make sense, and link the Instagram.

---

## Worth doing next

Add the review ask to your post-event routine so you never have to do a catch-up
campaign like this again: send Template 1 two or three days after every booking,
while the night is still fresh. That single habit compounds — twenty gigs a year at a
25% response rate is five new reviews a year, every year, for no ongoing effort.
