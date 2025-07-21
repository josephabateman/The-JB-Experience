"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
  clientTestimonial?: {
    text: string;
    client: string;
  };
}

// This would typically come from your CMS/database
const getBlogPost = (slug: string): BlogPost | null => {
  const posts: BlogPost[] = [
    {
      id: "1",
      title: "Magical Wedding at Gaynes Park, Essex - Sarah & Tom's Big Day",
      slug: "gaynes-park-wedding-sarah-tom",
      excerpt: "An unforgettable evening of live music at one of Essex's most beautiful wedding venues.",
      content: `
        <p>What an incredible evening we had performing at Gaynes Park for Sarah and Tom's wedding! This stunning Essex venue provided the perfect backdrop for an unforgettable celebration.</p>
        
        <h3>The Perfect Wedding Venue</h3>
        <p>Gaynes Park in Epping is renowned as one of Essex's premier wedding destinations, and it's easy to see why. The Georgian mansion and beautiful gardens create a magical atmosphere that's perfect for both intimate ceremonies and grand receptions.</p>
        
        <h3>Our Performance</h3>
        <p>We started the evening with acoustic background music during the drinks reception, featuring some of Sarah and Tom's favorite love songs. As the evening progressed, we cranked up the energy with our full band setup, getting everyone on the dance floor with classics like "Mr. Brightside," "Sweet Caroline," and "Don't Stop Me Now."</p>
        
        <p>The highlight of the evening was definitely their first dance to "Perfect" by Ed Sheeran - there wasn't a dry eye in the house!</p>
        
        <h3>Why Choose Live Music for Your Essex Wedding?</h3>
        <p>Live music brings an energy and authenticity that recorded music simply can't match. Our experience performing at venues like Gaynes Park across Essex and Hertfordshire means we know how to read the room and keep your guests entertained all night long.</p>
      `,
      date: "2024-03-15",
      category: "Wedding Gigs",
      featuredImage: "/images/blog/gaynes-park-wedding.jpg",
      venue: "Gaynes Park",
      location: "Epping, Essex",
      eventType: "Wedding Reception",
      gallery: [
        "/images/blog/gaynes-park-1.jpg",
        "/images/blog/gaynes-park-2.jpg",
        "/images/blog/gaynes-park-3.jpg",
        "/images/blog/gaynes-park-4.jpg",
        "/images/blog/gaynes-park-5.jpg",
        "/images/blog/gaynes-park-6.jpg"
      ],
      videoUrl: "https://www.youtube.com/embed/example1",
      clientTestimonial: {
        text: "The JB Experience made our wedding absolutely perfect! They had everyone dancing from the first song to the last. Joe learned our first dance song specially for us and it was magical. Highly recommend for any Essex wedding!",
        client: "Sarah & Tom Johnson"
      }
    },
    {
      id: "2",
      title: "Corporate Event Success at Hilton London Canary Wharf",
      slug: "hilton-canary-wharf-corporate-event",
      excerpt: "High-energy entertainment for 200+ guests at this prestigious London corporate venue.",
      content: `
        <p>We recently had the pleasure of performing at the prestigious Hilton London Canary Wharf for a major corporate client's annual celebration. With over 200 guests from across Europe, the energy in the room was electric!</p>
        
        <h3>Professional Corporate Entertainment</h3>
        <p>Corporate events require a different approach to wedding gigs. Our setlist focused on crowd-pleasing classics that would appeal to an international audience, with genres spanning from jazz standards during the networking session to high-energy rock and pop for the main entertainment.</p>
        
        <h3>The Venue</h3>
        <p>The Hilton Canary Wharf is a world-class venue with incredible acoustics and lighting. The ballroom provided the perfect setting for both our acoustic setup during dinner and our full band performance for the after-party.</p>
        
        <p>Highlights included our versions of "Superstition," "Get Lucky," and a show-stopping finale with "Don't Stop Me Now" that had the entire crowd singing along.</p>
      `,
      date: "2024-03-10",
      category: "Corporate Events", 
      featuredImage: "/images/blog/hilton-corporate.jpg",
      venue: "Hilton London Canary Wharf",
      location: "London E14",
      eventType: "Corporate Event",
      gallery: [
        "/images/blog/hilton-1.jpg",
        "/images/blog/hilton-2.jpg",
        "/images/blog/hilton-3.jpg",
        "/images/blog/hilton-4.jpg"
      ],
      videoUrl: "https://www.youtube.com/embed/example2",
      clientTestimonial: {
        text: "Outstanding performance! The JB Experience understood exactly what we needed for our corporate event. Professional, reliable, and incredibly talented. Our international guests are still talking about the show!",
        client: "Marcus Wright, Event Director"
      }
    }
  ];

  return posts.find(post => post.slug === slug) || null;
};

interface PageProps {
  params: { slug: string };
}

const BlogPostPage = ({ params }: PageProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % post.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + post.gallery.length) % post.gallery.length);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
          <span>→</span>
          <Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400">Blog</Link>
          <span>→</span>
          <span className="text-gray-900 dark:text-white">{post.title}</span>
        </nav>

        <div className="mb-6">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
          <span>📅 {new Date(post.date).toLocaleDateString()}</span>
          <span>📍 {post.venue}, {post.location}</span>
          <span>🎵 {post.eventType}</span>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8 bg-gray-200 dark:bg-gray-700">
          {post.featuredImage && (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Video Section */}
      {post.videoUrl && (
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🎥 Watch Our Performance
          </h2>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <iframe
              src={post.videoUrl}
              title={`${post.title} - Video`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Photo Gallery */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            📸 Photo Gallery ({post.gallery.length} photos)
          </h2>
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View Full Gallery
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {post.gallery.slice(0, 6).map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => {
                setCurrentImageIndex(index);
                setIsGalleryOpen(true);
              }}
            >
              <Image
                src={image}
                alt={`${post.venue} - Photo ${index + 1}`}
                fill
                className="object-cover"
              />
              {index === 5 && post.gallery.length > 6 && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    +{post.gallery.length - 6} more
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Client Testimonial */}
      {post.clientTestimonial && (
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              💬 What Our Client Said
            </h2>
            <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
              &ldquo;{post.clientTestimonial.text}&rdquo;
            </blockquote>
            <cite className="text-indigo-600 dark:text-indigo-400 font-semibold">
              - {post.clientTestimonial.client}
            </cite>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Love What You See?</h2>
          <p className="text-xl mb-6 opacity-90">
            Book The JB Experience for your {post.category.toLowerCase()} in {post.location.split(',')[1]?.trim() || 'London'} and surrounding areas
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

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
            >
              ✕
            </button>
            
            <div className="relative max-w-5xl max-h-full">
              <Image
                src={post.gallery[currentImageIndex]}
                alt={`${post.venue} - Photo ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />
              
              {post.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all"
                  >
                    →
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                {currentImageIndex + 1} / {post.gallery.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;