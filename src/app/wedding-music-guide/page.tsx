import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Wedding Music Guide 2025 | First Dance Songs & Playlists | The JB Experience",
  description: "The ultimate guide to wedding music for 2025. First dance songs, reception playlists, ceremony music & band vs DJ advice from London wedding music experts.",
  keywords: "wedding music guide, first dance songs 2025, wedding playlist, ceremony music, reception music, wedding band vs DJ, best wedding songs, wedding music planning",
  openGraph: {
    title: "Complete Wedding Music Guide 2025 | Wedding Music Planning",
    description: "Everything you need to know about planning your wedding music - from first dance songs to reception playlists. Expert advice from London wedding band.",
  },
};

const WeddingMusicGuide = () => {
  const firstDanceSongs2025 = [
    { title: "Perfect", artist: "Ed Sheeran", genre: "Pop/Acoustic", popularity: "Very Popular" },
    { title: "Thinking Out Loud", artist: "Ed Sheeran", genre: "Pop/Acoustic", popularity: "Very Popular" },
    { title: "All of Me", artist: "John Legend", genre: "R&B/Soul", popularity: "Very Popular" },
    { title: "Marry Me", artist: "Train", genre: "Pop Rock", popularity: "Popular" },
    { title: "A Thousand Years", artist: "Christina Perri", genre: "Pop/Acoustic", popularity: "Very Popular" },
    { title: "Make You Feel My Love", artist: "Adele/Bob Dylan", genre: "Folk/Soul", popularity: "Popular" },
    { title: "Your Song", artist: "Elton John", genre: "Classic Pop", popularity: "Timeless" },
    { title: "Can't Help Myself", artist: "Four Tops", genre: "Motown", popularity: "Retro Favorite" },
    { title: "Budapest", artist: "George Ezra", genre: "Folk Pop", popularity: "Popular" },
    { title: "Ho Hey", artist: "The Lumineers", genre: "Folk", popularity: "Popular" },
  ];

  const receptionPlaylist = [
    { category: "Early Reception (Background)", songs: ["Valerie - Steve Winwood", "Isn't She Lovely - Stevie Wonder", "Your Song - Elton John", "Sweet Caroline - Neil Diamond"] },
    { category: "Getting the Party Started", songs: ["Mr. Brightside - The Killers", "Don't Stop Me Now - Queen", "I'm a Believer - The Monkees", "Happy - Pharrell Williams"] },
    { category: "Dance Floor Fillers", songs: ["Uptown Funk - Bruno Mars", "Can't Stop the Feeling - Justin Timberlake", "Shut Up and Dance - Walk the Moon", "September - Earth, Wind & Fire"] },
    { category: "Sing-Alongs", songs: ["Bohemian Rhapsody - Queen", "Livin' on a Prayer - Bon Jovi", "Don't Look Back in Anger - Oasis", "Wonderwall - Oasis"] },
  ];

  const musicTimeline = [
    { time: "Pre-Ceremony (30 mins)", music: "Soft acoustic covers, instrumental versions", volume: "Background level" },
    { time: "Ceremony Entrance", music: "Bridal entrance song (3-4 mins)", volume: "Clear but not overwhelming" },
    { time: "Ceremony Exit", music: "Upbeat celebration song", volume: "Full volume" },
    { time: "Cocktail Hour (1 hour)", music: "Acoustic covers, jazz standards", volume: "Background conversation level" },
    { time: "Dinner (1.5 hours)", music: "Soft acoustic sets, easy listening", volume: "Background level" },
    { time: "First Dance (5 mins)", music: "Your chosen song", volume: "Feature level" },
    { time: "Reception Dancing (3+ hours)", music: "High-energy mix", volume: "Party level" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Wedding Music Guide 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Everything you need to know about planning the perfect wedding music
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            From first dance songs to reception playlists - expert advice from London&apos;s professional wedding musicians
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What&apos;s In This Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Planning Essentials</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Wedding music timeline</li>
                <li>• Live band vs DJ comparison</li>
                <li>• Budget planning tips</li>
                <li>• Venue considerations</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Song Suggestions</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Top first dance songs 2025</li>
                <li>• Reception playlist ideas</li>
                <li>• Ceremony music options</li>
                <li>• Special request considerations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Live Band vs DJ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Live Band vs DJ: What&apos;s Best for Your Wedding?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Live Band */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🎸</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Live Band</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ Advantages:</h4>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Authentic live energy & interaction</li>
                    <li>• Unique versions of popular songs</li>
                    <li>• Professional entertainment experience</li>
                    <li>• Can adapt to crowd response</li>
                    <li>• Memorable visual performance</li>
                    <li>• Takes requests and personalizes songs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Considerations:</h4>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Higher cost (£599-£1,499+)</li>
                    <li>• Limited to songs they know</li>
                    <li>• Requires more space for setup</li>
                    <li>• Break times needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DJ */}
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🎧</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">DJ</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ Advantages:</h4>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Access to any song ever recorded</li>
                    <li>• Generally lower cost</li>
                    <li>• Continuous music (no breaks)</li>
                    <li>• Smaller setup footprint</li>
                    <li>• Can mix songs seamlessly</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Considerations:</h4>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Less interactive performance</li>
                    <li>• Playing recorded versions only</li>
                    <li>• May feel less &ldquo;special&rdquo;</li>
                    <li>• Quality varies significantly</li>
                    <li>• Limited crowd interaction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Our Recommendation:</h4>
              <p className="text-gray-700 dark:text-gray-300">
                For weddings, live bands create more memorable moments and authentic energy. Many couples choose acoustic sets for dinner and full band for dancing - getting the best of both worlds!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Dance Songs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Top First Dance Songs for 2025
          </h2>
          
          <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Song</th>
                    <th className="px-6 py-4 text-left font-semibold">Artist</th>
                    <th className="px-6 py-4 text-left font-semibold">Genre</th>
                    <th className="px-6 py-4 text-left font-semibold">Popularity</th>
                  </tr>
                </thead>
                <tbody>
                  {firstDanceSongs2025.map((song, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'} hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors`}>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{song.title}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{song.artist}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{song.genre}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          song.popularity === 'Very Popular' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                          song.popularity === 'Popular' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                          song.popularity === 'Timeless' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                          'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                        }`}>
                          {song.popularity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">💡 Pro Tip: Song Choice</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Choose a song that means something to you both. Popular doesn&apos;t always mean right for your relationship.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">⏱️ Duration Matters</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Most first dances are 3-4 minutes. Consider asking your band to fade out early if needed.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">🎸 Live Version</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Acoustic versions often work better for first dances than full band arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Music Timeline */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Your Wedding Day Music Timeline
          </h2>
          
          <div className="space-y-8">
            {musicTimeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.time}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.volume}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700 dark:text-gray-300">{item.music}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reception Playlist Ideas */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Reception Playlist Ideas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {receptionPlaylist.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.songs.map((song, songIndex) => (
                    <li key={songIndex} className="flex items-center space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-sm font-semibold">
                        {songIndex + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{song}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Tips */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Expert Tips from The JB Experience
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🎵 Song Requests & Special Moments</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Most professional bands can learn new songs with advance notice. Don&apos;t be afraid to request something meaningful to you, even if it&apos;s not on their standard setlist.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Pro tip:</strong> Give your band a &ldquo;do not play&rdquo; list too - some songs might have negative associations you&apos;d rather avoid.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📍 Venue Considerations</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Different venues have different acoustic properties. Outdoor venues might need more powerful sound systems, while historic buildings might have volume restrictions.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Always check with your venue about noise restrictions, power requirements, and setup space before booking your entertainment.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">💰 Budget Planning</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Typically allocate 8-15% of your wedding budget to entertainment. Remember to factor in travel costs if your venue is far from London.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Booking direct with bands (like us!) can save 20-30% compared to going through agencies, leaving more budget for other wedding priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Perfect Wedding Music?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let The JB Experience help bring your vision to life with professional live music
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+447939000446"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call +44 7939 000446
            </Link>
            <Link
              href="/#inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              📧 Get Your Quote
            </Link>
          </div>
          <p className="mt-6 opacity-75">
            Serving London, Essex, Hertfordshire and surrounding areas
          </p>
        </div>
      </section>
    </div>
  );
};

export default WeddingMusicGuide;