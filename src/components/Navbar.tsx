"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { name: "About", link: "/#about" },
  { name: "Gallery", link: "/#gallery" },
  { name: "Reviews", link: "/#testimonials" },
  { name: "Setlist", link: "/#setlist" },
  { name: "FAQ", link: "/#faq" },
  { name: "Music", link: "/music" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-ink-900/90 backdrop-blur-md shadow-sm border-b border-neutral-200/70 dark:border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / wordmark */}
        <Link
          href="/"
          className={`font-serif text-lg font-semibold tracking-tight transition-colors ${
            scrolled ? "text-ink-900 dark:text-white" : "text-white"
          }`}
          aria-label="The JB Experience — home"
        >
          The JB Experience
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                    scrolled ? "text-ink-800 dark:text-neutral-200" : "text-white/90"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:+447939000446"
            className={`text-sm font-semibold transition-colors hover:text-gold-500 ${
              scrolled ? "text-ink-900 dark:text-white" : "text-white"
            }`}
          >
            07939&nbsp;000446
          </a>
          <Link href="/#booking-form" className="btn-gold px-5 py-2.5 text-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu */}
        <Disclosure as="div" className="lg:hidden">
          {({ open, close }) => (
            <>
              <Disclosure.Button
                className={`relative z-50 rounded-md p-2 transition-colors ${
                  scrolled ? "text-ink-900 dark:text-white" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {open ? (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </Disclosure.Button>

              <Disclosure.Panel className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-ink-900">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="font-serif text-2xl text-white transition-colors hover:text-gold-400"
                    onClick={() => close()}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="tel:+447939000446"
                  className="mt-2 text-lg font-semibold text-neutral-300"
                  onClick={() => close()}
                >
                  📞 07939 000446
                </a>
                <Link
                  href="/#booking-form"
                  className="btn-gold mt-2"
                  onClick={() => close()}
                >
                  Get a Quote
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </header>
  );
};
