// app/layout.tsx
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { Inter } from "next/font/google";
import "./globals.css";  // global styles import

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The JB Experience – High-Energy Pop, Rock & Soul Band for Weddings, Parties & Events in East London",
  description: "The JB Experience is a high-energy pop, rock, and soul band based in East London. Perfect for weddings, corporate events, birthday parties, and private functions. Book now for unforgettable live entertainment!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar /> {/* You can enable this later when you're ready */}
          <div>{children}</div>
          <Footer />
          {/* <PopupWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
