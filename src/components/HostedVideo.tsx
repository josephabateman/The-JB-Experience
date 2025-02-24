"use client";

import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import Image from "next/image";

const HostedVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isSafari, setIsSafari] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(true);
  const videoSrc = "/video/output.m3u8"; // Ensure this path is correct

  // Detect Safari (including iOS)
  useEffect(() => {
    const isSafariBrowser =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isSafari) {
      // Safari natively supports HLS
      video.src = videoSrc;
      video.load();
    } else if (Hls.isSupported()) {
      // Use Hls.js for other browsers
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => {
          console.warn("Autoplay blocked:", err);
          setShowVideo(false);
          setControlsVisible(false);
        });
      });

      return () => {
        hls.destroy();
      };
    }
  }, [isSafari]);

  const handlePlay = () => {
    setShowVideo(true);
    setControlsVisible(true);

    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch((err) => console.error("Play failed:", err));
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      {showVideo ? (
        <video
          ref={videoRef}
          autoPlay
          controls={false}
          muted={isMuted}
          playsInline
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="brightness-50">
            <Image
              src="/img/band-performing.jpg"
              alt="Video of band performing"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <button
            onClick={handlePlay}
            className="absolute flex items-center justify-center w-20 h-20 bg-white text-black rounded-full shadow-lg hover:scale-110 hover:bg-gray-200 transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}

      {controlsVisible && (
        <div className="absolute bottom-[10%] right-4 lg:top-[10%] lg:bottom-auto flex flex-row space-x-2">
          <button
            onClick={toggleMute}
            className="inline-flex items-center px-2 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition"
          >
            {isMuted ? "🔊" : "🔇"}
          </button>
          <a
            href="https://www.youtube.com/watch?v=b7RNiZ3eUxc"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center justify-center w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a2.984 2.984 0 0 0-2.102-2.108C19.61 3.5 12 3.5 12 3.5s-7.61 0-9.396.578A2.984 2.984 0 0 0 .5 6.186 31.161 31.161 0 0 0 0 12a31.161 31.161 0 0 0 .5 5.814 2.984 2.984 0 0 0 2.102 2.108C4.39 20.5 12 20.5 12 20.5s7.61 0 9.396-.578a2.984 2.984 0 0 0 2.102-2.108A31.161 31.161 0 0 0 24 12a31.161 31.161 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default HostedVideo;
