import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import Script from "next/script";  // Import next/script
import { Analytics } from "@vercel/analytics/react";  // Import Analytics component
import "./globals.css";  

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The JB Experience – High-Energy Pop, Rock & Soul Band for Weddings, Parties & Events in London",
  description: "The JB Experience is a high-energy pop, rock, and soul band based in London. Perfect for weddings, corporate events, birthday parties, and private functions. Book now for unforgettable live entertainment!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16871323737"
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
              gtag('config', 'AW-16871323737');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          {/* Add Vercel Analytics component */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
