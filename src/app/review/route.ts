import { NextResponse } from "next/server";
import { GOOGLE_REVIEW_URL } from "@/config/contact";

/**
 * Short, memorable redirect to the Google review form.
 *
 * thejbexperience.co.uk/review is short enough to put in a text message, an
 * email signature or say out loud at the end of a gig — unlike a raw
 * g.page/r/... link, which looks like spam in a WhatsApp message.
 *
 * Kept as a route handler (not a page) so it is a real HTTP redirect with no
 * HTML, no flash of content and no client JS.
 */
// Read at request time, not build time. Static would bake the URL into the
// build, so setting GOOGLE_REVIEW_URL in Vercel would silently do nothing until
// the next deploy — an easy thing to be confused by. The cost of a tiny
// serverless redirect is worth not hitting that.
export const dynamic = "force-dynamic";

export function GET() {
  // 307: temporary on purpose. If the Google link ever changes, browsers and
  // crawlers that saw this will not have cached a permanent redirect.
  return NextResponse.redirect(GOOGLE_REVIEW_URL, 307);
}
