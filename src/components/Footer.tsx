import Link from "next/link";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-ink-900 border-t border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="py-10 grid gap-8 sm:grid-cols-3 sm:items-start">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-lg font-semibold text-ink-900 dark:text-white">
              The JB Experience
            </Link>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              London wedding &amp; function band. Solo, duo &amp; full band for weddings, corporate
              events and parties across London, Essex &amp; Hertfordshire.
            </p>
          </div>

          {/* Explore */}
          <div className="text-sm">
            <p className="mb-3 font-semibold text-ink-900 dark:text-white">Explore</p>
            <ul className="space-y-2 text-neutral-500 dark:text-neutral-400">
              <li><Link href="/#about" className="hover:text-gold-500">The band</Link></li>
              <li><Link href="/#testimonials" className="hover:text-gold-500">Reviews</Link></li>
              <li><Link href="/#booking-form" className="hover:text-gold-500">Get a quote</Link></li>
              <li><Link href="/music" className="hover:text-gold-500">Joe Bateman (solo artist)</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-sm">
            <p className="mb-3 font-semibold text-ink-900 dark:text-white">Get in touch</p>
            <ul className="space-y-2 text-neutral-500 dark:text-neutral-400">
              <li><a href="tel:+447939000446" className="hover:text-gold-500">📞 07939 000446</a></li>
              <li><a href="mailto:joebatemanofficial@gmail.com" className="hover:text-gold-500">✉ joebatemanofficial@gmail.com</a></li>
            </ul>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.instagram.com/joebatemanofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-gold-500 transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} The JB Experience. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);
