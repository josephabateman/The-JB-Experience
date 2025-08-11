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
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Setlist
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A selection of crowd favorites spanning multiple decades and genres
          </p>
          
          {!showSetlist && (
            <button
              onClick={() => setShowSetlist(true)}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Our Setlist
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
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
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
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">♪</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white truncate">
                        {song.song}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
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
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  {showAll ? `Show Less` : `Show All Songs`}
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