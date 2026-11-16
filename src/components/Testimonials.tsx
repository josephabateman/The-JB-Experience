"use client";

import { useEffect, useRef, useState } from "react";

import { REVIEWS } from "@/content/reviews";

export default function ReviewsSlider() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Track scroll position so the arrows can disable themselves at either end.
  const syncArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  };

  useEffect(() => {
    syncArrows();
  }, []);

  const scrollByCards = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section className="section bg-neutral-50 dark:bg-ink-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="eyebrow mb-3">Reviews</p>
          <h2 className="mb-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
            What our clients say
          </h2>
          <div className="mb-3 flex items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <span className="text-lg text-gold-500">★★★★★</span>
            <span className="font-semibold">5-star rated</span>
            <span className="text-neutral-400">·</span>
            <span>{REVIEWS.length} reviews</span>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Real feedback from weddings, corporate events and private celebrations across London,
            Essex &amp; Hertfordshire.
          </p>
        </div>

        {/* Native scroll-snap carousel — no carousel library, no extra JS payload,
            and it stays swipeable on touch and keyboard-scrollable on desktop. */}
        <div
          ref={trackRef}
          onScroll={syncArrows}
          tabIndex={0}
          role="region"
          aria-label="Client reviews, scrollable"
          className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS.map((review, index) => (
            <figure
              key={`${review.name}-${index}`}
              data-review-card
              className="flex w-[85vw] max-w-sm flex-none snap-start flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-ink-900 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="mb-4 text-lg text-gold-500" aria-label={`${review.rating || 5} out of 5 stars`}>
                {"★".repeat(review.rating || 5)}
              </div>
              <blockquote className="flex-1 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-neutral-200 pt-4 dark:border-neutral-700">
                <span className="block font-semibold text-ink-900 dark:text-white">{review.name}</span>
                <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                  {review.event}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => scrollByCards(-1)}
            disabled={atStart}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink-900 shadow-md transition-all hover:scale-105 hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            aria-label="Previous reviews"
          >
            <span className="text-xl" aria-hidden="true">←</span>
          </button>
          <button
            onClick={() => scrollByCards(1)}
            disabled={atEnd}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink-900 shadow-md transition-all hover:scale-105 hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            aria-label="More reviews"
          >
            <span className="text-xl" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
