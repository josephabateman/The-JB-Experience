"use client";

import { useState } from "react";
import Link from "next/link";
import { GENRES, SETLIST_SONGS, songsInGenre } from "@/content/setlist";

export default function Setlist() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredSongs = songsInGenre(selectedGenre);
  const songsToShow = showAll ? filteredSongs : filteredSongs.slice(0, 12);

  return (
    <section className="section bg-neutral-50 dark:bg-ink-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="eyebrow mb-3">The music</p>
          <h2 className="mb-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
            {SETLIST_SONGS.length}+ songs in the set
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Crowd favourites spanning six decades — from first-dance classics to the floor-fillers
            that keep everyone up until the lights come on. We&apos;ll learn your first dance free.
          </p>
        </div>

        {/* Genre filter */}
        <div className="mb-8 mt-8 flex flex-wrap justify-center gap-2.5">
          {GENRES.map((genre) => (
            <button
              key={genre.name}
              onClick={() => {
                setSelectedGenre(genre.name);
                setShowAll(false);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedGenre === genre.name
                  ? "bg-gold-500 text-ink-900"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-gold-400 dark:border-neutral-600 dark:bg-ink-700 dark:text-neutral-300"
              }`}
            >
              {genre.name}
            </button>
          ))}
        </div>

        {/* Songs grid */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {songsToShow.map((song, index) => (
            <div
              key={`${song.artist}-${song.song}-${index}`}
              className="rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-gold-400 dark:border-neutral-700 dark:bg-ink-700"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 dark:bg-gold-900/40">
                  <span className="font-bold text-gold-600 dark:text-gold-400">♪</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-ink-900 dark:text-white">{song.song}</p>
                  <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
                    {song.artist}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          {filteredSongs.length > 12 && (
            <button onClick={() => setShowAll(!showAll)} className="btn-ghost">
              {showAll ? "Show fewer" : `Show all ${filteredSongs.length} songs`}
            </button>
          )}
          <Link href="/songs" className="btn-ghost">
            Full song list →
          </Link>
        </div>
      </div>
    </section>
  );
}
