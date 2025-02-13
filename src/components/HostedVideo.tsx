"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const HostedVideo: React.FC = () => {
  // Default to 720p
  const [videoUrl, setVideoUrl] = useState("/video/Background_720p.mp4");

  useEffect(() => {
    // Check if the Network Information API is available
    if (navigator.connection && navigator.connection.effectiveType) {
      const { effectiveType } = navigator.connection;

      // Adjust the video resolution based on connection type
      if (effectiveType === "4g") {
        setVideoUrl("/video/Background_1080p.mp4");
      } else if (effectiveType === "3g") {
        setVideoUrl("/video/Background_480p.mp4");
      } else if (effectiveType === "2g" || effectiveType === "slow-2g") {
        setVideoUrl("/video/Background_360p.mp4");
      } else {
        // Fallback
        setVideoUrl("/video/Background_720p.mp4");
      }
    }
  }, []);

  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <ReactPlayer
        url={videoUrl}
        playing
        muted
        loop
        controls={false}
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default HostedVideo;
