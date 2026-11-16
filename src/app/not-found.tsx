import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | The JB Experience",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/prices", label: "Prices", note: "What a solo, duo or full band costs" },
  { href: "/songs", label: "Song list", note: "Everything in our set" },
  { href: "/corporate-events", label: "Corporate events", note: "Company parties and launches" },
  { href: "/blog", label: "Advice", note: "Guides on booking live music" },
];

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-white pt-24 dark:bg-ink-900">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
          We can&apos;t find that page
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          The link may be out of date. Here&apos;s where most people are heading — or go straight to
          a quote for your date.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/#booking-form" className="btn-gold w-full sm:w-auto">
            Check your date &amp; price
          </Link>
          <Link href="/" className="btn-ghost w-full sm:w-auto">
            Back to home
          </Link>
        </div>

        <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-xl border border-neutral-200 p-4 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-md dark:border-neutral-800"
              >
                <span className="font-semibold text-ink-900 dark:text-white">{l.label}</span>
                <span className="mt-1 block text-sm text-neutral-500 dark:text-neutral-400">
                  {l.note}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
