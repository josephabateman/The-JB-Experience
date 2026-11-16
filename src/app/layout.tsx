import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import { PRICING } from "@/config/pricing";
import { SITE, jsonLd, musicGroupSchema, websiteSchema } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  weight: ["500", "600", "700"],
  variable: '--font-playfair'
});

export const metadata = {
  title: `Wedding Band London | From £${PRICING.soloPrice}, No Agency Fees | The JB Experience`,
  description: `Live band for weddings, corporate events & parties across London, Essex & Hertfordshire. Prices published up front from £${PRICING.soloPrice} — PA & lighting included, booked direct with no agency commission. Free quote in 24 hours.`,
  keywords: "wedding band London, corporate entertainment London, wedding musicians London, live band hire London, corporate event band London, function band London, wedding band Essex, wedding band Hertfordshire, book direct wedding band, no agency fees wedding band, affordable wedding band London, professional wedding band, live music London",
  author: "The JB Experience",
  robots: "index, follow",
  metadataBase: new URL('https://www.thejbexperience.co.uk'),
  openGraph: {
    title: "Wedding Band London | Corporate Entertainment | The JB Experience",
    description: `Professional live music for weddings & corporate events across London, Essex, Hertfordshire. Book direct & save 30%. From £${PRICING.soloPrice}.`,
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
    description: `Professional live music for weddings & corporate events across London, Essex, Hertfordshire. Book direct & save 30%. From £${PRICING.soloPrice}.`,
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        
        {/* Preload the LCP image only — Next injects its own CSS links */}
        <link rel="preload" href="/images/band-performing.jpg" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        
        {/* Site-wide structured data, built from src/config/site.ts so the
            business facts stay identical across every page. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(musicGroupSchema())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema())} />

        {/* Geo hints (Bing still reads these) */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content={`${SITE.latitude};${SITE.longitude}`} />
        <meta name="ICBM" content={`${SITE.latitude}, ${SITE.longitude}`} />

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
          <AnalyticsEvents />
        </ThemeProvider>
      </body>
    </html>
  );
}
