import type { Metadata } from "next";
import Link from "next/link";
import { GENRES, SETLIST_SONGS, songsInGenre } from "@/content/setlist";

const SITE = "https://www.thejbexperience.co.uk";

export const metadata: Metadata = {
  title: `Wedding Band Song List | ${SETLIST_SONGS.length}+ Songs | The JB Experience`,
  description: `The full song list for The JB Experience — ${SETLIST_SONGS.length}+ wedding and party covers spanning rock, pop, soul, Motown and classics. First dance songs learned free. London, Essex & Hertfordshire.`,
  keywords:
    "wedding band song list, wedding band setlist London, function band songs, party band set list, first dance songs, live band repertoire London",
  alternates: { canonical: `${SITE}/songs` },
  openGraph: {
    title: `Wedding Band Song List — ${SETLIST_SONGS.length}+ Songs`,
    description:
      "The full repertoire for The JB Experience: rock, pop, soul, Motown and classics for weddings, corporate events and parties.",
    url: `${SITE}/songs`,
    type: "website",
  },
};

// Everything except the "All" pseudo-filter, which has no artist list.
const namedGenres = GENRES.filter((g) => g.name !== "All");

export default function SongsPage() {
  // Songs that do not match any named genre still deserve a home.
  const categorised = new Set(
    namedGenres.flatMap((g) => songsInGenre(g.name).map((s) => `${s.artist}|${s.song}`))
  );
  const other = SETLIST_SONGS.filter((s) => !categorised.has(`${s.artist}|${s.song}`));

  const sections = [
    ...namedGenres.map((g) => ({ name: g.name, songs: songsInGenre(g.name) })),
    ...(other.length ? [{ name: "More favourites", songs: other }] : []),
  ].filter((s) => s.songs.length > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicPlaylist",
            name: "The JB Experience — wedding & function band song list",
            url: `${SITE}/songs`,
            numTracks: SETLIST_SONGS.length,
            track: SETLIST_SONGS.map((s) => ({
              "@type": "MusicRecording",
              name: s.song,
              byArtist: { "@type": "MusicGroup", name: s.artist },
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
              { "@type": "ListItem", position: 2, name: "Song list", item: `${SITE}/songs` },
            ],
          }),
        }}
      />

      <main className="bg-white pt-24 dark:bg-ink-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="py-10 text-center sm:py-14">
            <p className="eyebrow mb-3">Repertoire</p>
            <h1 className="mx-auto max-w-3xl text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
              Our full song list
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              {SETLIST_SONGS.length}+ songs across six decades, arranged for solo, duo or full band.
              Every set is built around your crowd — and we learn your first dance free.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/#booking-form" className="btn-gold w-full sm:w-auto">
                Check your date
              </Link>
              <Link href="/#about" className="btn-ghost w-full sm:w-auto">
                See the line-ups
              </Link>
            </div>
          </header>

          {/* Jump links */}
          <nav aria-label="Jump to genre" className="mb-10 flex flex-wrap justify-center gap-2.5">
            {sections.map((s) => (
              <a
                key={s.name}
                href={`#${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-gold-400 hover:text-gold-600 dark:border-neutral-700 dark:bg-ink-800 dark:text-neutral-300"
              >
                {s.name} <span className="text-neutral-400">({s.songs.length})</span>
              </a>
            ))}
          </nav>

          {/* Genre sections */}
          <div className="space-y-12 pb-12">
            {sections.map((section) => (
              <section
                key={section.name}
                id={section.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="scroll-mt-28"
              >
                <h2 className="mb-5 border-b border-neutral-200 pb-3 text-2xl font-bold text-ink-900 dark:border-neutral-800 dark:text-white">
                  {section.name}
                </h2>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                  {section.songs.map((song, i) => (
                    <li
                      key={`${song.song}-${i}`}
                      className="flex items-baseline gap-2 border-b border-neutral-100 py-2.5 dark:border-neutral-800/60"
                    >
                      <span className="font-medium text-ink-900 dark:text-white">{song.song}</span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        — {song.artist}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Requests note */}
          <div className="mb-16 rounded-3xl bg-ink-900 px-6 py-12 text-center">
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Don&apos;t see your song?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-300">
              This is our standard set, not a limit. We learn your first dance free for weddings,
              and other requests for a small rehearsal fee. Tell us what matters to you.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/#booking-form" className="btn-gold w-full sm:w-auto">
                Get your free quote
              </Link>
              <Link
                href="/prices"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
              >
                See our prices
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
