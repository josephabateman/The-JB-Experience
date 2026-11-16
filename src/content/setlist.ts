// Shared setlist data — used by the homepage section and the indexable /songs page.

export interface Song {
  artist: string;
  song: string;
}

export const SETLIST_SONGS: Song[] = [
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

export interface Genre {
  name: string;
  count?: number;
  artists?: string[];
}

export const GENRES: Genre[] = [
  { name: "All" },
  { name: "Rock", artists: ["Queen", "The Beatles", "Oasis", "Kings of Leon", "The Killers", "Bryan Adams", "Chuck Berry", "Wheatus", "Bon Jovi", "The Who", "Jet", "The Strokes", "Kaiser Chiefs"] },
  { name: "Pop", artists: ["Ed Sheeran", "George Ezra", "Bruno Mars", "Maroon 5", "Harry Styles", "WALK THE MOON", "DNCE"] },
  { name: "Soul/R&B", artists: ["James Brown", "Stevie Wonder", "Ray Charles", "Bill Withers", "Adele", "Ben E. King"] },
  { name: "Classic", artists: ["Elvis Presley", "Frank Sinatra & Count Basie", "Johnny Cash", "Neil Diamond", "Tracy Chapman", "Stealers Wheel"] },
  { name: "Country", artists: ["Darius Rucker", "John Denver"] },
];

/** Songs belonging to a named genre ("All" returns everything). */
export const songsInGenre = (name: string): Song[] => {
  if (name === "All") return SETLIST_SONGS;
  const genre = GENRES.find((g) => g.name === name);
  return SETLIST_SONGS.filter((s) => genre?.artists?.some((a) => s.artist.includes(a)));
};
