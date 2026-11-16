"use client";

import { useEffect, useRef, useState } from "react";

interface Review {
  id?: string;
  name: string;
  event: string;
  text: string;
  rating?: number;
}

// Fallback reviews (original data)
const fallbackReviews = [
  {
    name: "Richard C",
    event: "Corporate Event - Hilton, London",
    text: "Joe and the band were a huge hit at our event! I kept hearing fantastic feedback throughout the night about how talented and engaging they were. They brought great energy and professionalism, making the evening truly memorable. Would highly recommend!",
  },
  {
    name: "Fiona E",
    event: "Wedding - London",
    text: "They were fantastic! The music was lively and engaging, and the way they interacted with the crowd made the evening so enjoyable. I got tons of compliments from our guests about how talented the band was, and it really added a special touch to our event. They definitely made the night a highlight for everyone involved.",
  },
  {
    name: "Olivia H",
    event: "Wedding - Surrey",
    text: "Our wedding was unforgettable thanks to Joe and his band! Their setlist perfectly included our favourite songs, and they had a great way of reading the crowd. The band was not only professional but also friendly and approachable. We're so grateful they were part of our special day and can't recommend them enough!",
  },
  {
    name: "Nathan C",
    event: "Private Event - London",
    text: "They did not disappoint! The band was super easy to work with and arrived early, which helped everything run smoothly. They brought so much energy to the night, and everyone kept raving about how great the music was. I was especially impressed when they got my friends—who usually never dance—up on the floor! I highly recommend them for any event!",
  },
  {
    name: "Francesca D",
    event: "Wedding - London",
    text: "We had Joe play at our wedding, and he was amazing! The entire band created a wonderful atmosphere. They were really accommodating with our song requests and kept the dance floor packed all night. We received so many compliments from our guests about how great they were!",
  },
  {
    name: "Felicity B",
    event: "Wedding - London",
    text: "Joe and the band were amazing! We had a very specific style of music we wanted for our wedding, and they absolutely delivered. The band created such a beautiful atmosphere during the day. When the evening hit, they kept the energy high, and the dance floor was packed all night. We couldn't have asked for more!",
  },
  {
    name: "Adam P",
    event: "Private Event - London",
    text: "I hired this band for a recent event, and I was really impressed. They struck the perfect balance between laid-back background music and lively dance tracks. The band played flawlessly, and they were a fantastic choice for our gathering.",
  },
  {
    name: "Michael H",
    event: "Corporate Event - London",
    text: "The band was the highlight of our corporate event. Their versatility shone through as they moved effortlessly between laid-back acoustic numbers and more upbeat tracks. Our guests kept commenting on how much they enjoyed the music. The band was polished, professional, and incredibly easy to work with!",
  },
  {
    name: "Bethany F",
    event: "New Year's Eve Party - London",
    text: "Hired for our New Year's Eve party, and they completely blew us away! The band was super tight, and the performance was unforgettable. It was the perfect way to ring in the new year!",
  },
  {
    name: "Francesca D",
    event: "Company Christmas Party - London",
    text: "We hired Joe and his band for our company's Christmas party, and they really got everyone in the festive spirit! The energy was fantastic, and they nailed a great mix of Christmas classics and crowd favourites. Everyone was up dancing from the moment they started playing, and it really made the night special. Can't recommend them enough!",
  },
  {
    name: "Rebecca C",
    event: "Birthday Party - London",
    text: "Joe's performance was the highlight of the evening at my husband's birthday. The band really brought the party to life, and everyone loved the mix of covers and originals. By the end, the dance floor was packed! The whole experience—the looping, the musicianship—made it extra special.",
  },
  {
    name: "Sarah D",
    event: "Wedding - London",
    text: "Joe Bateman and his band were exceptional at our wedding! The energy was through the roof, and the whole band had the crowd dancing non-stop. We couldn't have asked for a more perfect performance to cap off our day. Highly recommend!",
  },
];

export default function ReviewsSlider() {
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Testimonials managed through the admin panel override the built-in list.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && data?.success && data.data?.length > 0) setReviews(data.data);
      })
      .catch(() => {
        /* keep the built-in reviews */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Track scroll position so the arrows can disable themselves at either end.
  const syncArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  };

  useEffect(() => {
    syncArrows();
  }, [reviews]);

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
            <span>{reviews.length} reviews</span>
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
          {reviews.map((review, index) => (
            <figure
              key={review.id ?? index}
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
