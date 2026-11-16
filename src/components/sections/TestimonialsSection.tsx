import Testimonials from "../Testimonials";

/**
 * The reviews section.
 *
 * This used to load Testimonials through next/dynamic with `ssr: false`, which
 * meant the twelve client reviews — the most persuasive content on the site, and
 * the only social proof above the booking form — were absent from the HTML
 * entirely. Visitors got a grey skeleton until the JS arrived, and crawlers were
 * asked to execute JavaScript before seeing a single word of it.
 *
 * It was deferred because the reviews were fetched from an API at runtime.
 * They are static content now (src/content/reviews.ts), so the component renders
 * on the server and the review text ships in the initial HTML. Testimonials is
 * still a client component — the carousel arrows need state — but that costs
 * nothing here: client components are server-rendered too.
 */
export const TestimonialsSection = () => <Testimonials />;
