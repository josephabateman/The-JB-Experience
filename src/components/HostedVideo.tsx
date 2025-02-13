"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HostedVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.loop = true;
      video.preload = "auto";

      const tryPlay = () => {
        video.play().catch(() => {
          console.warn("Autoplay blocked, displaying image instead.");
          setShowVideo(false);
          setControlsVisible(false);
        });
      };

      video.addEventListener("canplaythrough", tryPlay);
      tryPlay();

      return () => {
        video.removeEventListener("canplaythrough", tryPlay);
      };
    }
  }, []);

  const handlePlay = () => {
    setShowVideo(true);
    setControlsVisible(true);

    const video = videoRef.current;
    if (video) {
      video.muted = false; // Unmute when play is clicked
      setIsMuted(false);
      video.play().catch((err) => console.error("Play failed:", err));
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted; // Toggle mute state
      setIsMuted(video.muted);
    }
  };

  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      {showVideo ? (
        <video
          ref={videoRef}
          src="/video/Background_720p.mp4"
          loop
          muted={isMuted} // Ensure mute state is applied
          playsInline
          autoPlay
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="brightness-50"><Image
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
              <path d="M23.498 6.186a2.984 2.984 0 0 0-2.102-2.108C19.61 3.5 12 3.5 12 3.5s-7.61 0-9.396.578A2.984 2.984 0 0 0 .5 6.186 31.161 31.161 0 0 0 0 12a31.161 31.161 0 0 0 .5 5.814 2.984 2.984 0 0 0 2.102 2.108C4.39 20.5 12 20.5 12 20.5s7.61 0 9.396-.578a2.984 2.984 0 0 0 2.102-2.108A31.161 31.161 0 0 0 24 12a31.161 31.161 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default HostedVideo;
