"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  featuredImage: string;
  venue: string;
  location: string;
  eventType: string;
  gallery: string[];
  videoUrl?: string;
}

// Sample blog posts - you can replace this with a CMS later
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Magical Wedding at Gaynes Park, Essex - Sarah & Tom's Big Day",
    slug: "gaynes-park-wedding-sarah-tom",
    excerpt: "An unforgettable evening of live music at one of Essex's most beautiful wedding venues. From acoustic ceremony music to high-energy reception dancing!",
    content: "Full blog content here...",
    date: "2024-03-15",
    category: "Wedding Gigs",
    featuredImage: "/images/blog/gaynes-park-wedding.jpg",
    venue: "Gaynes Park",
    location: "Epping, Essex",
    eventType: "Wedding Reception",
    gallery: [
      "/images/blog/gaynes-park-1.jpg",
      "/images/blog/gaynes-park-2.jpg",
      "/images/blog/gaynes-park-3.jpg"
    ],
    videoUrl: "https://www.youtube.com/embed/example1"
  },
  {
    id: "2", 
    title: "Corporate Event Success at Hilton London Canary Wharf",
    slug: "hilton-canary-wharf-corporate-event",
    excerpt: "High-energy entertainment for 200+ guests at this prestigious London corporate venue. Jazz, pop, and crowd favorites!",
    content: "Full blog content here...",
    date: "2024-03-10",
    category: "Corporate Events",
    featuredImage: "/images/blog/hilton-corporate.jpg",
    venue: "Hilton London Canary Wharf",
    location: "London E14",
    eventType: "Corporate Event",
    gallery: [
      "/images/blog/hilton-1.jpg",
      "/images/blog/hilton-2.jpg"
    ],
    videoUrl: "https://www.youtube.com/embed/example2"
  }
];

const categories = ["All", "Wedding Gigs", "Corporate Events", "Private Parties", "Festivals"];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      {/* SEO-optimized header */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Recent Gigs & Performances
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            See The JB Experience in action at weddings, corporate events, and private parties across London, Essex, and Hertfordshire. Real venues, real celebrations, real memories.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search venues or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            />
            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Featured Image */}
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage}
                    alt={`${post.venue} - ${post.eventType}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-6xl">🎸</span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>📅 {new Date(post.date).toLocaleDateString()}</span>
                  <span>📍 {post.location}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Venue Info */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{post.venue}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{post.eventType}</p>
                    </div>
                    <div className="flex gap-2">
                      {post.videoUrl && (
                        <span className="text-red-500" title="Video Available">🎥</span>
                      )}
                      <span className="text-blue-500" title={`${post.gallery.length} Photos`}>
                        📸 {post.gallery.length}
                      </span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center mt-3 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold"
                  >
                    View Gallery & Details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No posts found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Want Your Event Featured Here?</h2>
          <p className="text-xl mb-6 opacity-90">
            Book The JB Experience for your wedding, corporate event, or party across London, Essex, and Hertfordshire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+447939000446"
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Call +44 7939 000446
            </Link>
            <Link
              href="/#inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              📧 Get Your Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;