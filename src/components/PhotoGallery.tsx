"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Gallery images with descriptive alt text — generic alt ("band performance")
 * wastes the image-search traffic these photos could earn.
 */
const GALLERY = [
  { src: "/images/Photo Jan 25 2025, 19 48 13.jpg", alt: "The JB Experience full band performing live at a London event" },
  { src: "/images/Photo Jan 25 2025, 19 48 59.jpg", alt: "Joe Bateman singing and playing guitar with the band" },
  { src: "/images/Photo Jan 25 2025, 19 49 20.jpg", alt: "Live band entertaining a packed dance floor in London" },
  { src: "/images/Photo Jan 25 2025, 19 49 40.jpg", alt: "The JB Experience rhythm section performing at an evening reception" },
  { src: "/images/Photo Jan 25 2025, 19 49 53.jpg", alt: "Wedding and function band playing under stage lighting" },
  { src: "/images/Photo Jan 31 2025, 18 41 16 (1).jpg", alt: "The JB Experience performing for guests at a private party" },
];

const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH8U7hOKUXKcJN2IRVGCAw5ExmDwWbMa6vl3Zw+GjxnfOslNlMEH5rJCLN7GbSgbF9fgNRXhCFvIpVeCRIXhiYBdCRHOGNzWvOGKkJOWFvlOL9+k6pHg5sYQAJAB3j3yVhQEH3zxoRZxNEhupPnBg8MmVFCLPTKYB9Q6QGxNQgOg7DfCkVGf86VNnlSiUbE5A39dJ1TZA6cjkOCNKk7HGb1W4P8wCLs+OKrxAVFJrPfnMWfGf8KrrpnVR3BUVRA7ZyPDgkG+vNDMnM4kMNDKnDuN/PEKo/9k=";

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (delta: number) =>
      setLightbox((i) => (i === null ? i : (i + delta + GALLERY.length) % GALLERY.length)),
    []
  );

  // Lock background scroll and wire keyboard controls while the lightbox is open.
  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  const scrollByCards = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-gallery-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="section bg-white dark:bg-ink-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="eyebrow mb-3">Gallery</p>
          <h2 className="mb-4 text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
            See us in action
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Weddings, corporate events and parties across London, Essex &amp; Hertfordshire.
          </p>
        </div>

        {/* Scroll-snap strip — rendered in the initial HTML, no carousel library. */}
        <div
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-label="Photo gallery, scrollable"
          className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {GALLERY.map((photo, index) => (
            <button
              key={photo.src}
              data-gallery-card
              onClick={() => setLightbox(index)}
              className="group relative aspect-square w-[70vw] flex-none snap-start overflow-hidden rounded-xl shadow-md sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-0.875rem)] lg:w-[calc(25%-0.9375rem)]"
              aria-label={`Open image: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 70vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={75}
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL={BLUR}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                <svg
                  className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => scrollByCards(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-ink-800 shadow-md transition-colors hover:border-gold-400 dark:border-neutral-600 dark:bg-ink-800 dark:text-white"
            aria-label="Previous images"
          >
            <span className="text-xl" aria-hidden="true">←</span>
          </button>
          <button
            onClick={() => scrollByCards(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-ink-800 shadow-md transition-colors hover:border-gold-400 dark:border-neutral-600 dark:bg-ink-800 dark:text-white"
            aria-label="Next images"
          >
            <span className="text-xl" aria-hidden="true">→</span>
          </button>
        </div>

        {/* CTA after gallery */}
        <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center shadow-sm dark:border-neutral-700 dark:bg-ink-800">
          <h3 className="mb-3 text-2xl font-bold text-ink-900 dark:text-white">
            Ready to create memories like these?
          </h3>
          <p className="mb-5 text-neutral-600 dark:text-neutral-300">
            Professional entertainment with a personal touch — and prices published up front.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/#booking-form" className="btn-gold w-full sm:w-auto">
              Check availability
            </Link>
            <Link href="/prices" className="btn-ghost w-full sm:w-auto">
              See prices
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].alt}
              width={1200}
              height={900}
              className="h-full w-full object-contain"
              quality={85}
              priority
              sizes="(max-width: 768px) 95vw, 80vw"
            />

            <button
              onClick={close}
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/90"
              aria-label="Close image viewer"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={() => step(-1)}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/90"
              aria-label="Previous image"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => step(1)}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/90"
              aria-label="Next image"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
              {lightbox + 1} / {GALLERY.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
