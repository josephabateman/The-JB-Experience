"use client";

import dynamic from "next/dynamic";
import { useState, useRef } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface YoutubeProps {
  onPlayStateChange: (isPlaying: boolean) => void;
}

const Youtube: React.FC<YoutubeProps> = ({ onPlayStateChange }) => {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef(null);

  const toggleMute = () => setMuted((prev) => !prev);
  const togglePlay = () => {
    const newState = !playing;
    setPlaying(newState);
    onPlayStateChange(newState); // Notify parent (Navbar)
  };

  return (
    <div className="relative w-full">
      {/* Background Video */}
      <a
        href="https://www.youtube.com/watch?v=b7RNiZ3eUxc"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full"
        style={{ paddingBottom: "56.25%" }}
      >
        <ReactPlayer
          ref={playerRef}
          url="https://www.youtube.com/watch?v=b7RNiZ3eUxc"
          playing={playing}
          muted={muted}
          loop
          controls={false}
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
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
            cursor: "pointer",
          }}
        />
      </a>

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
