"use client";

import { useState } from "react";

const setlistSongs = [
  { artist: "The Monkees", song: "I'm A Believer" },
  { artist: "George Ezra", song: "Budapest" },
  { artist: "George Ezra", song: "Shotgun" },
  { artist: "Tracy Chapman", song: "Fast Car" },
  { artist: "DNCE", song: "Cake By The Ocean" },
  { artist: "Mark Ronson feat. Amy Winehouse", song: "Valerie" },
  { artist: "Elvis Presley", song: "A Little Less Conversation" },
  { artist: "Ed Sheeran", song: "Castle On The Hill" },
  { artist: "CeeLo Green", song: "Forget You" },
  { artist: "Daft Punk feat. Pharrell Williams & Nile Rodgers", song: "Get Lucky" },
  { artist: "Pharrell Williams", song: "Happy" },
  { artist: "Ed Sheeran", song: "Shape Of You" },
  { artist: "Maroon 5", song: "Harder To Breathe" },
  { artist: "The Beatles", song: "Hey Jude" },
  { artist: "WALK THE MOON", song: "Shut Up And Dance" },
  { artist: "James Bay", song: "Hold Back The River" },
  { artist: "Kings of Leon", song: "Sex On Fire" },
  { artist: "Oasis", song: "Wonderwall" },
  { artist: "James Brown", song: "I Got You I Feel Good" },
  { artist: "Bruno Mars", song: "Locked Out Of Heaven" },
  { artist: "Creedence Clearwater Revival", song: "Proud Mary" },
  { artist: "Oasis", song: "Don't Look Back In Anger" },
  { artist: "Stevie Wonder", song: "Superstition" },
  { artist: "Ed Sheeran", song: "Thinking Out Loud" },
  { artist: "Maroon 5", song: "This Love" },
  { artist: "Bruno Mars", song: "Treasure" },
  { artist: "Mark Ronson feat. Bruno Mars", song: "Uptown Funk" },
  { artist: "Kings of Leon", song: "Use Somebody" },
  { artist: "Chuck Berry", song: "Johnny B Goode" },
  { artist: "Queen", song: "Crazy Little Thing Called Love" },
  { artist: "Bryan Adams", song: "Summer Of 69" },
  { artist: "Wheatus", song: "Teenage Dirtbag" },
  { artist: "The Killers", song: "Mr Brightside" },
  { artist: "Queen", song: "Don't Stop Me Now" },
  { artist: "Elton John", song: "Your Song" },
  { artist: "The Killers", song: "Human" },
  { artist: "Snow Patrol", song: "Chasing Cars" },
  { artist: "Ricky Martin", song: "Livin La Vida Loca" },
  { artist: "Elvis Presley", song: "Jailhouse Rock" },
  { artist: "Harry Styles", song: "Watermelon Sugar" },
  { artist: "Frank Sinatra & Count Basie", song: "Fly Me To The Moon" },
  { artist: "Johnny Cash", song: "Ring Of Fire" },
  { artist: "Neil Diamond", song: "Sweet Caroline" },
  { artist: "Adele", song: "Rolling In The Deep" },
  { artist: "Ray Charles", song: "Hit The Road Jack" },
  { artist: "Coldplay", song: "Yellow" },
  { artist: "Bill Withers", song: "Ain't No Sunshine" },
  { artist: "Darius Rucker", song: "Wagon Wheel" },
  { artist: "Bon Jovi", song: "Livin' on a Prayer" },
  { artist: "John Denver", song: "Take Me Home, Country Roads" },
  { artist: "Stealers Wheel", song: "Stuck in the Middle with You" },
  { artist: "Ben E. King", song: "Stand By Me" },
  { artist: "The Who", song: "My Generation" },
  { artist: "Jet", song: "Are You Gonna Be My Girl" },
  { artist: "The Strokes", song: "Last Nite" },
  { artist: "Kaiser Chiefs", song: "I Predict a Riot" },
];

const genres = [
  { name: "All", count: setlistSongs.length },
  { name: "Rock", artists: ["Queen", "The Beatles", "Oasis", "Kings of Leon", "The Killers", "Bryan Adams", "Chuck Berry", "Wheatus", "Bon Jovi", "The Who", "Jet", "The Strokes", "Kaiser Chiefs"] },
  { name: "Pop", artists: ["Ed Sheeran", "George Ezra", "Bruno Mars", "Maroon 5", "Harry Styles", "WALK THE MOON", "DNCE"] },
  { name: "Soul/R&B", artists: ["James Brown", "Stevie Wonder", "Ray Charles", "Bill Withers", "Adele", "Ben E. King"] },
  { name: "Classic", artists: ["Elvis Presley", "Frank Sinatra & Count Basie", "Johnny Cash", "Neil Diamond", "Tracy Chapman", "Stealers Wheel"] },
  { name: "Country", artists: ["Darius Rucker", "John Denver"] },
];

export default function Setlist() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [showSetlist, setShowSetlist] = useState(false);

  const filteredSongs = selectedGenre === "All" 
    ? setlistSongs 
    : setlistSongs.filter(song => {
        const genre = genres.find(g => g.name === selectedGenre);
        return genre?.artists?.some(artist => song.artist.includes(artist));
      });

  const songsToShow = showAll ? filteredSongs : filteredSongs.slice(0, 12);

  return (
    <section className="section bg-neutral-50 dark:bg-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="eyebrow mb-3">The music</p>
          <h2 className="text-3xl font-bold text-ink-900 dark:text-white mb-4 sm:text-4xl">
            Our Setlist
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Crowd favourites spanning multiple decades and genres — from first-dance classics to
            floor-fillers.
          </p>

          {!showSetlist && (
            <button
              onClick={() => setShowSetlist(true)}
              className="btn-gold text-lg"
            >
              View our setlist
            </button>
          )}
        </div>

        {showSetlist && (
          <div className="mt-8">
            {/* Genre Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {genres.map((genre) => (
                <button
                  key={genre.name}
                  onClick={() => setSelectedGenre(genre.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedGenre === genre.name
                      ? "bg-gold-500 text-ink-900"
                      : "bg-white dark:bg-ink-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600 hover:border-gold-400"
                  }`}
                >
                  {genre.name}
                </button>
              ))}
            </div>

            {/* Songs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {songsToShow.map((song, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-ink-700 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-gold-400 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold-100 dark:bg-gold-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gold-600 dark:text-gold-400 font-bold">♪</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-ink-900 dark:text-white truncate">
                        {song.song}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
                        {song.artist}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More/Less Button */}
            {filteredSongs.length > 12 && (
              <div className="text-center mb-6">
                <button onClick={() => setShowAll(!showAll)} className="btn-ghost">
                  {showAll ? `Show less` : `Show all songs`}
                </button>
              </div>
            )}

            {/* Note */}
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We can learn your first dance for weddings.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}