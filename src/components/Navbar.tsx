"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/config/contact";

const bandNav = [
  { name: "About", link: "/#about" },
  { name: "Corporate", link: "/corporate-events" },
  { name: "Gallery", link: "/#gallery" },
  { name: "Reviews", link: "/#testimonials" },
  { name: "FAQ", link: "/#faq" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMusic = pathname?.startsWith("/music");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route/hash changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // On the solo-artist page the bar is always solid (dark page), elsewhere it's
  // transparent over the hero until you scroll.
  const solid = scrolled || isMusic;

  // ---------------------------------------------------------------------------
  // SOLO ARTIST MODE — distinct branding so it never feels like a band section
  // ---------------------------------------------------------------------------
  if (isMusic) {
    return (
      <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-800 bg-ink-900/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/music" className="flex items-baseline gap-2" aria-label="Joe Bateman — solo artist">
            <span className="font-serif text-lg font-semibold text-white">Joe Bateman</span>
            <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-400 sm:inline">
              Solo Artist
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-gold-400 hover:text-white"
          >
            <span aria-hidden="true">←</span>
            <span className="hidden sm:inline">The JB Experience</span>
            <span className="sm:hidden">Wedding band</span>
            <span className="hidden text-neutral-500 md:inline">· wedding &amp; events</span>
          </Link>
        </nav>
      </header>
    );
  }

  // ---------------------------------------------------------------------------
  // BAND MODE (default)
  // ---------------------------------------------------------------------------
  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        menuOpen
          ? "bg-transparent" // no backdrop-filter while open — it would clip the fixed overlay
          : solid
          ? "bg-white/90 dark:bg-ink-900/90 backdrop-blur-md shadow-sm border-b border-neutral-200/70 dark:border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / wordmark */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className={`relative z-50 font-serif text-lg font-semibold tracking-tight transition-colors ${
            solid && !menuOpen ? "text-ink-900 dark:text-white" : "text-white"
          }`}
          aria-label="The JB Experience — home"
        >
          The JB Experience
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-6">
            {bandNav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                    solid ? "text-ink-800 dark:text-neutral-200" : "text-white/90"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider + distinct solo-artist link */}
          <span className={`h-5 w-px ${solid ? "bg-neutral-300 dark:bg-neutral-700" : "bg-white/30"}`} aria-hidden="true" />
          <Link
            href="/music"
            className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/60 px-3 py-1.5 text-sm font-medium text-gold-500 transition-colors hover:bg-gold-500 hover:text-ink-900"
          >
            Joe Bateman · Solo
            <span aria-hidden="true" className="text-xs">↗</span>
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-semibold transition-colors hover:text-gold-500 ${
              solid ? "text-ink-900 dark:text-white" : "text-white"
            }`}
          >
            WhatsApp
          </a>
          <Link href="/#booking-form" className="btn-gold px-5 py-2.5 text-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`relative z-50 rounded-md p-2 transition-colors lg:hidden ${
            solid && !menuOpen ? "text-ink-900 dark:text-white" : "text-white"
          }`}
        >
          {menuOpen ? (
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-ink-900 lg:hidden">
          {bandNav.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="font-serif text-2xl text-white transition-colors hover:text-gold-400"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <span className="my-1 h-px w-24 bg-neutral-700" aria-hidden="true" />
          <Link
            href="/music"
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 px-5 py-2 font-serif text-xl text-gold-400 transition-colors hover:bg-gold-500 hover:text-ink-900"
            onClick={() => setMenuOpen(false)}
          >
            Joe Bateman · Solo ↗
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-lg font-semibold text-neutral-300"
            onClick={() => setMenuOpen(false)}
          >
            Message on WhatsApp
          </a>
          <Link href="/#booking-form" className="btn-gold" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};
