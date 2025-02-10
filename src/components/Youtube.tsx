"use client"; // 👈 Required for Next.js client components

import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import * as Slider from "@radix-ui/react-slider";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Youtube: React.FC = () => {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  const toggleMute = () => setMuted((prev) => !prev);
  const togglePlay = () => setPlaying((prev) => !prev);
  const handleProgress = (state) => setPlayed(state.played);
  const handleSeek = (value) => {
    if (playerRef.current) {
      playerRef.current.seekTo(value, "fraction");
    }
  };

  return (
    <div className="relative w-full">
      {/* Background Video */}
      <div className="relative w-full sepia-[.15]" style={{ paddingBottom: "56.25%" }}>
        <ReactPlayer
          ref={playerRef}
          url="https://www.youtube.com/embed/b7RNiZ3eUxc"
          playing={playing}
          muted={muted}
          loop={true}
          controls={false}
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          onProgress={handleProgress}
          config={{
            youtube: {
              playerVars: {
                controls: 0,
                modestbranding: 1,
                rel: 0,
                fs: 0,
                disablekb: 1,
              },
            },
          }}
          style={{
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-4 w-3/4">
        <button onClick={togglePlay} className="bg-white bg-opacity-75 text-black px-4 py-2 rounded-lg shadow-lg">
          {playing ? "Pause" : "Play"}
        </button>
    
        <button onClick={toggleMute} className="bg-white bg-opacity-75 text-black px-4 py-2 rounded-lg shadow-lg">
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
};

export default Youtube;
