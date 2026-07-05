"use client";

import { useState } from "react";

export default function MusicFollow() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Mailing list signup",
          email,
          message: "New Joe Bateman mailing-list signup (from /music page).",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="rounded-full bg-gold-500/15 px-6 py-3 text-center text-sm font-medium text-gold-200">
        🎉 You&apos;re on the list — new music coming your way soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="follow-email" className="sr-only">
        Email address
      </label>
      <input
        id="follow-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="w-full rounded-full border border-neutral-700 bg-ink-800 px-5 py-3 text-white placeholder-neutral-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gold-500"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold flex-shrink-0 disabled:opacity-60"
      >
        {status === "sending" ? "Joining…" : "Follow"}
      </button>
      {status === "error" && (
        <p className="mt-2 w-full text-center text-sm text-red-400 sm:absolute">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
