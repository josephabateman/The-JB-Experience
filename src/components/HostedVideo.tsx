"use client";

import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import Link from "next/link";

const HostedVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isSafari, setIsSafari] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoSrc = "/video/output.m3u8";

  useEffect(() => {
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isSafari) {
      video.src = videoSrc;
      video.load();
      video.play().catch(() => {});
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => console.warn("Autoplay blocked:", err));
      });
      return () => hls.destroy();
    }
  }, [isSafari]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-ink-900">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="none"
        poster="/images/band-performing.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/50 to-ink-900/85" />
      <div className="absolute inset-0 bg-ink-900/30" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-24 pb-16 text-center sm:px-6">
        <p className="eyebrow mb-4 animate-fade-up text-gold-300">
          London Live Band · Weddings · Corporate · Parties
        </p>
        <h1 className="mx-auto max-w-4xl animate-fade-up font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Live music that fills your dance floor
        </h1>
        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-neutral-200">
          Live entertainment for weddings, corporate events, Christmas parties and celebrations
          across London, Essex &amp; Hertfordshire — solo, duo or full band, booked direct with no
          agency fees.
        </p>

        {/* Trust row */}
        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-200">
          <span className="flex items-center gap-1.5">
            <span className="text-gold-400">★★★★★</span> 5-star rated
          </span>
          <span className="hidden text-neutral-500 sm:inline">•</span>
          <span>BBC Radio featured</span>
          <span className="hidden text-neutral-500 sm:inline">•</span>
          <span>Book direct &amp; save up to 30%</span>
        </div>

        {/* CTAs */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/#booking-form" className="btn-gold w-full sm:w-auto">
            Get your free quote
          </Link>
          <Link
            href="/#about"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
          >
            ▶ Watch us live
          </Link>
        </div>
      </div>

      {/* Mute toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-4 z-10 inline-flex items-center gap-2 rounded-full bg-ink-900/60 px-3 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-ink-900/80 sm:right-6"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M11.553 3.064A.75.75 0 0112 3.75v16.5a.75.75 0 01-1.255.555L5.46 16H2.75A1.75 1.75 0 011 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 01.808-.13z" />
            <path d="M18.718 4.222a.75.75 0 011.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 01-1.06-1.06 9.5 9.5 0 000-13.436.75.75 0 010-1.06z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.553 3.064A.75.75 0 0112 3.75v16.5a.75.75 0 01-1.255.555L5.46 16H2.75A1.75 1.75 0 011 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 01.808-.13z" />
          </svg>
        )}
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </section>
  );
};

export default HostedVideo;
