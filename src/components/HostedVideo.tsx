"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const HostedVideo: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState("/video/Background_720p.mp4");
  const [isMuted, setIsMuted] = useState(true); // Default to muted for autoplay
  const [showUnmute, setShowUnmute] = useState(true); // Show unmute prompt initially

  useEffect(() => {
    if (navigator.connection && navigator.connection.effectiveType) {
      const { effectiveType } = navigator.connection;
      if (effectiveType === "4g") {
        setVideoUrl("/video/Background_1080p.mp4");
      } else if (effectiveType === "3g") {
        setVideoUrl("/video/Background_480p.mp4");
      } else if (effectiveType === "2g" || effectiveType === "slow-2g") {
        setVideoUrl("/video/Background_360p.mp4");
      }
    }
  }, []);

  const handleUnmute = () => {
    setIsMuted(false);
    setShowUnmute(false); // Hide button after tap
  };

  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <ReactPlayer
        url={videoUrl}
        playing
        muted={isMuted}
        loop
        controls={false}
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        style={{ objectFit: "cover" }}
      />

      {/* Tap to Unmute Overlay */}
      {showUnmute && (
        <div
          onClick={handleUnmute}
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
        >
          <button className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition">
            Tap to Unmute 🔊
          </button>
        </div>
      )}

      {/* Buttons Wrapper */}
      <div className="absolute bottom-[10%] right-4 lg:top-[10%] lg:bottom-auto flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
        {/* YouTube Button */}
        <a
          href="https://www.youtube.com/watch?v=b7RNiZ3eUxc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 lg:w-8 lg:h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.498 6.186a2.984 2.984 0 0 0-2.102-2.108C19.61 3.5 12 3.5 12 3.5s-7.61 0-9.396.578A2.984 2.984 0 0 0 .5 6.186 31.161 31.161 0 0 0 0 12a31.161 31.161 0 0 0 .5 5.814 2.984 2.984 0 0 0 2.102 2.108C4.39 20.5 12 20.5 12 20.5s7.61 0 9.396-.578a2.984 2.984 0 0 0 2.102-2.108A31.161 31.161 0 0 0 24 12a31.161 31.161 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>

        </a>
      </div>
    </div>
  );
};

export default HostedVideo;
