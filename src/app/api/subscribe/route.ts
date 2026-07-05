import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Mailing-list signup for the Joe Bateman solo page.
 *
 * Behaviour:
 *  1. If MAILERLITE_API_KEY is set, the email is added to a real MailerLite
 *     subscriber list (optionally a specific group via MAILERLITE_GROUP_ID).
 *     MailerLite's free tier covers up to 1,000 subscribers / 12,000 emails a month.
 *  2. Otherwise it falls back to emailing the signup to Joe (using the same
 *     EMAIL_USER / EMAIL_PASS Gmail credentials the booking form uses), so no
 *     lead is ever lost while a list tool isn't connected yet.
 */
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Basic validation
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    // 1) Real mailing list via MailerLite (if configured)
    if (process.env.MAILERLITE_API_KEY) {
      const body: Record<string, unknown> = { email };
      if (process.env.MAILERLITE_GROUP_ID) {
        body.groups = [process.env.MAILERLITE_GROUP_ID];
      }

      const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify(body),
      });

      // MailerLite returns 200/201 for created/updated subscribers.
      if (res.ok) {
        return NextResponse.json({ message: "Subscribed", provider: "mailerlite" }, { status: 200 });
      }

      // Fall through to email fallback if the API errored, so the lead survives.
      console.error("MailerLite signup failed:", res.status, await res.text().catch(() => ""));
    }

    // 2) Fallback: email the signup to Joe
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      // Nothing is configured to capture the address — tell the client honestly.
      return NextResponse.json(
        { error: "Signups aren't set up yet. Please follow on Spotify or Instagram for now." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "joebatemanofficial@gmail.com",
      replyTo: email,
      subject: "🎵 New mailing-list signup (Joe Bateman /music)",
      text: `New follower wants to be kept up to date with new music.\n\nEmail: ${email}\n\n(Add them to your mailing list.)`,
    });

    return NextResponse.json({ message: "Subscribed", provider: "email" }, { status: 200 });
  } catch (error: unknown) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}
