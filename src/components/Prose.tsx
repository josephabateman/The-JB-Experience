import Link from "next/link";
import type { Block } from "@/content/blog";

/**
 * Server-rendered renderer for structured article content.
 * Everything here is static HTML — no client JS — so article text is in the
 * initial payload for both crawlers and first paint.
 */
export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mx-auto max-w-2xl">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-12 scroll-mt-28 text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-8 scroll-mt-28 text-lg font-bold text-ink-900 dark:text-white sm:text-xl"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="mt-5 text-[1.0625rem] leading-[1.75] text-neutral-700 dark:text-neutral-300"
              >
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 space-y-3">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[1.0625rem] leading-[1.7] text-neutral-700 dark:text-neutral-300"
                  >
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 border-l-2 border-gold-500 bg-neutral-50 py-4 pl-5 pr-4 font-serif text-lg italic leading-relaxed text-ink-900 dark:bg-ink-800 dark:text-neutral-100"
              >
                {block.text}
              </blockquote>
            );
          case "table":
            return (
              <div key={i} className="my-8 overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-neutral-300 dark:border-neutral-700">
                      {block.head.map((h, j) => (
                        <th
                          key={j}
                          scope="col"
                          className="py-3 pr-4 font-semibold text-ink-900 dark:text-white"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr
                        key={j}
                        className="border-b border-neutral-200 last:border-0 dark:border-neutral-800"
                      >
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className={`py-3 pr-4 align-top ${
                              k === 0
                                ? "font-medium text-ink-900 dark:text-white"
                                : "text-neutral-600 dark:text-neutral-400"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "cta":
            return (
              <div
                key={i}
                className="my-10 rounded-2xl border border-gold-300 bg-gold-50 p-6 text-center dark:border-gold-900/60 dark:bg-gold-900/10"
              >
                <p className="font-serif text-lg font-bold text-ink-900 dark:text-white">
                  {block.text}
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm text-neutral-600 dark:text-neutral-400">
                  Free, no-obligation quote including travel. We reply within 24 hours.
                </p>
                <Link href="/#booking-form" className="btn-gold mt-5">
                  Get your free quote
                </Link>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
