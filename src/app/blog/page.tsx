import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sortedPosts } from "@/content/blog";

const SITE = "https://www.thejbexperience.co.uk";

export const metadata: Metadata = {
  title: "Wedding Music Advice & Band Pricing Guides | The JB Experience",
  description:
    "Straight answers on booking live music in London — what a wedding band actually costs, band vs DJ, venue sound limiters, and a practical booking checklist.",
  keywords:
    "wedding band advice, wedding band cost London, band vs DJ, wedding music planning, booking a wedding band",
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    title: "Wedding Music Advice & Band Pricing Guides",
    description:
      "Straight answers on booking live music in London — real prices, band vs DJ, and a practical booking checklist.",
    url: `${SITE}/blog`,
    type: "website",
  },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function BlogIndexPage() {
  const posts = sortedPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "The JB Experience — wedding music advice",
            url: `${SITE}/blog`,
            publisher: { "@type": "Organization", name: "The JB Experience", url: SITE },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `${SITE}/blog/${p.slug}`,
              datePublished: p.date,
              dateModified: p.updated ?? p.date,
              description: p.description,
            })),
          }),
        }}
      />

      <main className="bg-white pt-24 dark:bg-ink-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="py-10 text-center sm:py-14">
            <p className="eyebrow mb-3">Advice</p>
            <h1 className="mx-auto max-w-3xl text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
              Straight answers about booking live music
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              Most band websites keep their prices and their advice behind an enquiry form. These
              guides give you the numbers and the questions to ask — whether or not you book us.
            </p>
          </header>

          {/* Posts */}
          <div className="grid gap-8 pb-16 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800 dark:bg-ink-800"
              >
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-ink-700">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    priority={i === 0}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-400">
                    <span>{post.category}</span>
                    <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-600">·</span>
                    <span className="font-medium normal-case tracking-normal text-neutral-500 dark:text-neutral-400">
                      {post.readingMinutes} min read
                    </span>
                  </div>

                  <h2 className="mt-3 font-serif text-xl font-bold leading-snug text-ink-900 dark:text-white">
                    <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-gold-600 dark:hover:text-gold-400">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-neutral-800">
                    <time dateTime={post.date} className="text-xs text-neutral-500 dark:text-neutral-400">
                      {formatDate(post.date)}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-gold-600 transition-colors hover:text-gold-500 dark:text-gold-400"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Tail CTA */}
          <div className="mb-16 rounded-3xl bg-ink-900 px-6 py-12 text-center">
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Want a number for your own event?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-300">
              Our quote form gives you a real figure including travel — not a brochure.
            </p>
            <Link href="/#booking-form" className="btn-gold mt-7">
              Get your free quote
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
