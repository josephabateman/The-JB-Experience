import type { Metadata } from "next";
import Link from "next/link";
import MusicFollow from "@/components/MusicFollow";

const SPOTIFY_ARTIST = "https://open.spotify.com/artist/6h3c0qpAfr6AiM53MFozVQ";
const SPOTIFY_EMBED = "https://open.spotify.com/embed/artist/6h3c0qpAfr6AiM53MFozVQ?utm_source=generator&theme=0";
const INSTAGRAM = "https://www.instagram.com/joebatemanofficial";
const YOUTUBE = "https://www.youtube.com/@JoeBatemanOfficialYouTube";
const LINKTREE = "https://linktr.ee/joebatemanofficial";

export const metadata: Metadata = {
  title: "Joe Bateman | London Pop-Soul Artist — 'You Can't Win' Out Now",
  description:
    "Joe Bateman is a London pop-soul artist with a guitar-led, half-time sound — aching vocals over electric guitar. For fans of John Mayer, Paolo Nutini and Mk.gee. Debut single 'You Can't Win' out now.",
  keywords:
    "Joe Bateman, Joe Bateman artist, London pop soul, guitar-led singer songwriter, You Can't Win, John Mayer, Paolo Nutini, Mk.gee, new music London",
  alternates: { canonical: "https://www.thejbexperience.co.uk/music" },
  openGraph: {
    title: "Joe Bateman | London Pop-Soul Artist — 'You Can't Win' Out Now",
    description:
      "London pop-soul, guitar-led, half-time. Aching vocals over electric guitar. For fans of John Mayer, Paolo Nutini and Mk.gee. Debut single 'You Can't Win' out now.",
    type: "profile",
    locale: "en_GB",
    url: "https://www.thejbexperience.co.uk/music",
    siteName: "Joe Bateman",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Bateman | London Pop-Soul Artist",
    description: "Debut single 'You Can't Win' out now — the first of four leading to an EP.",
  },
};

const socials = [
  { name: "Spotify", href: SPOTIFY_ARTIST, label: "Listen on Spotify" },
  { name: "YouTube", href: YOUTUBE, label: "Watch on YouTube" },
  { name: "Instagram", href: INSTAGRAM, label: "@joebatemanofficial" },
  { name: "Linktree", href: LINKTREE, label: "All links" },
];

export default function MusicPage() {
  return (
    <main className="bg-ink-900 text-neutral-100">
      {/* JSON-LD: solo artist + debut single */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            name: "Joe Bateman",
            genre: ["Pop", "Soul", "Pop-Soul", "Singer-Songwriter"],
            description:
              "London pop-soul artist with a guitar-led, half-time sound — aching vocals over electric guitar. For fans of John Mayer, Paolo Nutini and Mk.gee.",
            url: "https://www.thejbexperience.co.uk/music",
            foundingLocation: { "@type": "Place", name: "London, UK" },
            sameAs: [SPOTIFY_ARTIST, YOUTUBE, INSTAGRAM, LINKTREE],
            member: { "@type": "Person", name: "Joe Bateman", jobTitle: "Singer-Songwriter" },
            track: {
              "@type": "MusicRecording",
              name: "You Can't Win",
              byArtist: { "@type": "MusicGroup", name: "Joe Bateman" },
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-32 pb-16 text-center sm:px-6">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow mb-4 text-gold-300">Solo artist · London pop-soul</p>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
            Joe Bateman
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
            Guitar-led, half-time pop-soul — aching vocals with electric guitar bleeding through every
            section. For fans of <span className="text-white">John Mayer</span>,{" "}
            <span className="text-white">Paolo Nutini</span> and{" "}
            <span className="text-white">Mk.gee</span>.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={SPOTIFY_ARTIST} target="_blank" rel="noopener noreferrer" className="btn-gold w-full sm:w-auto">
              ▶ Listen to &ldquo;You Can&apos;t Win&rdquo;
            </a>
            <a
              href={YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Player + bio */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-2">
          {/* Spotify embed */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-neutral-800 shadow-xl">
              <iframe
                title="Joe Bateman on Spotify"
                src={SPOTIFY_EMBED}
                width="100%"
                height="420"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                style={{ border: 0 }}
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="eyebrow mb-3 text-gold-300">The story</p>
            <h2 className="font-serif text-3xl font-bold text-white">Debut single out now</h2>
            <p className="mt-5 leading-relaxed text-neutral-300">
              Joe Bateman is a London pop-soul artist with a guitar-led, half-time sound — aching
              vocals over electric guitar that bleeds through every section. For fans of John Mayer,
              Paolo Nutini and Mk.gee. His debut single &ldquo;You Can&apos;t Win&rdquo; is out now,
              the first of four leading to an EP.
            </p>
            <div className="mt-8 rounded-2xl border border-neutral-800 bg-ink-800 p-6">
              <p className="font-serif text-lg font-semibold text-white">Follow the journey</p>
              <p className="mt-1 text-sm text-neutral-400">
                Be first to hear each new single as it drops on the way to the EP.
              </p>
              <div className="mt-4">
                <MusicFollow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="border-t border-neutral-800 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3 text-gold-300">Everywhere</p>
          <h2 className="font-serif text-2xl font-bold text-white">Find Joe online</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-neutral-800 bg-ink-800 p-5 transition-colors hover:border-gold-400"
              >
                <p className="font-serif text-base font-bold text-white group-hover:text-gold-300">
                  {s.name}
                </p>
                <p className="mt-1 text-xs text-neutral-400">{s.label}</p>
              </a>
            ))}
          </div>

          <p className="mt-12 text-sm text-neutral-500">
            Looking for the wedding &amp; function band?{" "}
            <Link href="/" className="text-gold-400 underline-offset-2 hover:underline">
              Visit The JB Experience →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
