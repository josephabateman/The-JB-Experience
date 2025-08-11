import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata = {
  title: "Wedding Band London | Corporate Entertainment | The JB Experience",
  description: "Professional live music for weddings & corporate events across London, Essex, Hertfordshire. Book direct & save 30%. From £599. Call 07939 000446",
  keywords: "wedding band London, corporate entertainment London, wedding musicians London, live band hire London, corporate event band London, function band London, wedding band Essex, wedding band Hertfordshire, book direct wedding band, no agency fees wedding band, affordable wedding band London, professional wedding band, live music London",
  author: "The JB Experience",
  robots: "index, follow",
  metadataBase: new URL('https://www.thejbexperience.co.uk'),
  openGraph: {
    title: "Wedding Band London | Corporate Entertainment | The JB Experience",
    description: "Professional live music for weddings & corporate events across London, Essex, Hertfordshire. Book direct & save 30%. From £599.",
    type: "website",
    locale: "en_GB",
    siteName: "The JB Experience",
    images: [
      {
        url: "/images/band-performing.jpg",
        width: 1200,
        height: 630,
        alt: "The JB Experience wedding band performing live in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Band London | Corporate Entertainment | The JB Experience",
    description: "Professional live music for weddings & corporate events across London, Essex, Hertfordshire. Book direct & save 30%. From £599.",
    images: ["/images/band-performing.jpg"],
  },
  alternates: {
    canonical: "https://www.thejbexperience.co.uk",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="preload" href="/images/band-performing.jpg" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        
        {/* Local Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "The JB Experience",
              "alternateName": "Joe Bateman Band",
              "description": "Professional wedding and event band serving London, Essex, and Hertfordshire. Book direct - no agency fees!",
              "url": "https://www.thejbexperience.co.uk",
              "logo": "https://www.thejbexperience.co.uk/images/band-performing.jpg",
              "image": "https://www.thejbexperience.co.uk/images/band-performing.jpg",
              "telephone": "+447939000446",
              "email": "info@thejbexperience.com",
              "genre": ["Pop", "Rock", "Folk", "Funk", "Wedding Music"],
              "foundingLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "London",
                  "addressRegion": "Greater London",
                  "postalCode": "E10",
                  "addressCountry": "GB"
                }
              },
              "areaServed": [
                {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 51.5693,
                    "longitude": -0.0146
                  },
                  "geoRadius": "64374"
                },
                "London",
                "Essex",
                "Hertfordshire",
                "Kent",
                "Surrey"
              ],
              "priceRange": "£599-£1499",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Solo Performance with Loop Pedal",
                  "price": "599",
                  "priceCurrency": "GBP",
                  "description": "Solo acoustic performance with live looping technology"
                },
                {
                  "@type": "Offer",
                  "name": "Full Band Performance",
                  "price": "1499",
                  "priceCurrency": "GBP",
                  "description": "Three-piece band: vocals/guitar, bass, drums. Saxophone available for additional fee"
                }
              ],
              "member": [
                {
                  "@type": "Person",
                  "name": "Joe Bateman",
                  "jobTitle": "Lead Vocalist & Guitarist"
                }
              ],
              "sameAs": [
                "https://www.youtube.com/channel/UCexample",
                "https://www.instagram.com/thejbexperience",
                "https://www.facebook.com/thejbexperience"
              ],
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.thejbexperience.co.uk#contact",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                  ]
                },
                "result": {
                  "@type": "Reservation",
                  "name": "Wedding Band Booking"
                }
              }
            })
          }}
        />
        
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Wedding Band Services",
              "provider": {
                "@type": "MusicGroup",
                "name": "The JB Experience"
              },
              "areaServed": ["London", "Essex", "Hertfordshire", "Kent", "Surrey"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Wedding & Event Music Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wedding Reception Music",
                      "description": "Live music for wedding receptions, ceremony, and first dance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Corporate Event Entertainment",
                      "description": "Professional live music for corporate events, parties, and functions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Private Party Music",
                      "description": "Live entertainment for birthday parties, anniversaries, and celebrations"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Geo Location Meta Tags */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5693;-0.0146" />
        <meta name="ICBM" content="51.5693, -0.0146" />
        
        {/* Additional Local SEO Tags */}
        <meta name="coverage" content="London, Essex, Hertfordshire, Kent, Surrey" />
        <meta name="distribution" content="local" />
        <meta name="target" content="wedding bands London, wedding musicians Essex, event entertainment Hertfordshire" />

        {/* Google Ads Conversion Tracking */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16871323737"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16871323737');
            `,
          }}
        />

        {/* Google Analytics (GA4) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FZKECVBGWM"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FZKECVBGWM');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
