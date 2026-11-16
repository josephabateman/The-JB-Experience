import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Prose } from "@/components/Prose";
import { BLOG_POSTS, getPost, sortedPosts } from "@/content/blog";

const SITE = "https://www.thejbexperience.co.uk";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Article not found | The JB Experience" };

  return {
    title: `${post.metaTitle} | The JB Experience`,
    description: post.description,
    alternates: { canonical: `${SITE}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url: `${SITE}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.description,
      images: [post.image],
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = sortedPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: `${SITE}${post.image}`,
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            author: { "@type": "Person", name: "Joe Bateman", url: `${SITE}/music` },
            publisher: {
              "@type": "Organization",
              name: "The JB Experience",
              url: SITE,
              logo: { "@type": "ImageObject", url: `${SITE}/images/band-performing.jpg` },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${post.slug}` },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Advice", item: `${SITE}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
            ],
          }),
        }}
      />

      <main className="bg-white pt-24 dark:bg-ink-900">
        <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="py-5 text-sm text-neutral-500 dark:text-neutral-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-gold-600 dark:hover:text-gold-400">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-gold-600 dark:hover:text-gold-400">Advice</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-neutral-700 dark:text-neutral-300">{post.category}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mx-auto max-w-2xl pb-8 pt-4 text-center">
            <p className="eyebrow mb-3">{post.category}</p>
            <h1 className="text-3xl font-bold leading-tight text-ink-900 dark:text-white sm:text-4xl lg:text-[2.75rem]">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400">
              <span>By Joe Bateman</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
            {post.updated && post.updated !== post.date && (
              <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
                Updated {formatDate(post.updated)}
              </p>
            )}
          </header>

          {/* Hero image */}
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-ink-800">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          {/* Body */}
          <div className="py-12">
            <Prose blocks={post.body} />
          </div>

          {/* Author note */}
          <div className="mx-auto mb-12 max-w-2xl rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-ink-800">
            <p className="font-serif text-base font-bold text-ink-900 dark:text-white">
              Written by Joe Bateman
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              Joe leads The JB Experience, a London wedding and function band playing weddings,
              corporate events and parties across London, Essex and Hertfordshire. He also releases
              music as a{" "}
              <Link href="/music" className="font-medium text-gold-600 underline-offset-2 hover:underline dark:text-gold-400">
                solo artist
              </Link>
              .
            </p>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mb-16" aria-label="More articles">
              <h2 className="mb-6 text-center text-2xl font-bold text-ink-900 dark:text-white">
                More advice
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group rounded-2xl border border-neutral-200 p-5 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-md dark:border-neutral-800"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-400">
                      {p.category}
                    </p>
                    <p className="mt-2 font-serif text-lg font-bold text-ink-900 dark:text-white">
                      {p.title}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                      {p.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
