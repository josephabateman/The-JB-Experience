import Link from "next/link";
import { breadcrumbSchema, jsonLd } from "@/config/site";

/**
 * Visible breadcrumb trail plus matching BreadcrumbList JSON-LD.
 *
 * Google uses this to replace the bare URL in search results with a readable
 * path, which measurably lifts click-through on deeper pages.
 */
export function Breadcrumbs({ trail }: { trail: [string, string][] }) {
  const last = trail[trail.length - 1];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-5 text-sm sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-neutral-500 dark:text-neutral-400">
          <li>
            <Link href="/" className="hover:text-gold-600 dark:hover:text-gold-400">
              Home
            </Link>
          </li>
          {trail.map(([name, path], i) => (
            <li key={path} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {i === trail.length - 1 ? (
                <span aria-current="page" className="text-neutral-700 dark:text-neutral-300">
                  {name}
                </span>
              ) : (
                <Link href={path} className="hover:text-gold-600 dark:hover:text-gold-400">
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
