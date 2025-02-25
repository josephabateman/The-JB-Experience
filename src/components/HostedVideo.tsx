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
  const [isLoading, setIsLoading] = useState(true);
  const videoSrc = "/video/output.m3u8";

  useEffect(() => {
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => setIsLoading(true);
    const handleLoadedData = () => setIsLoading(false);

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleLoadedData);

    if (isSafari) {
      video.src = videoSrc;
      video.load();
    } else if (Hls.isSupported()) {
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

      return () => hls.destroy();
    }

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [isSafari]);

  const handlePlay = () => {
    setShowVideo(true);
    setControlsVisible(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch(console.error);
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
      {/* Loading overlay with spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-gray-200 animate-spin fill-indigo-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading video...</span>
          </div>
        </div>
      )}

      {showVideo ? (
        <video
          ref={videoRef}
          autoPlay
          controls={false}
          muted={isMuted}
          playsInline
          loop
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Darkened image container */}
          <div className="absolute inset-0 brightness-50 contrast-125">
            <Image
              src="/img/band-performing.jpg"
              alt="Video preview"
              width={1920}
              height={1080}
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Prominent play button */}
          <button
            onClick={handlePlay}
            className="relative z-20 flex items-center justify-center w-32 h-32 bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full shadow-2xl hover:scale-110 hover:bg-white transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping" />
          </button>
        </div>
      )}

      {controlsVisible && (
        <div className="absolute bottom-[10%] right-4 lg:top-[10%] lg:bottom-auto flex flex-row space-x-2">
          <button
            onClick={toggleMute}
            className="inline-flex items-center px-2 py-2 bg-gray-800/80 hover:bg-gray-900/90 backdrop-blur-sm text-white rounded-full shadow-lg transition"
          >
            {isMuted ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
             <path fill-rule="evenodd" d="M11.553 3.064A.75.75 0 0112 3.75v16.5a.75.75 0 01-1.255.555L5.46 16H2.75A1.75 1.75 0 011 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 01.808-.13zM10.5 5.445l-4.245 3.86a.75.75 0 01-.505.195h-3a.25.25 0 00-.25.25v4.5c0 .138.112.25.25.25h3a.75.75 0 01.505.195l4.245 3.86V5.445z"/>
             <path d="M18.718 4.222a.75.75 0 011.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 01-1.06-1.06 9.5 9.5 0 000-13.436.75.75 0 010-1.06z"/>
             <path d="M16.243 7.757a.75.75 0 10-1.061 1.061 4.5 4.5 0 010 6.364.75.75 0 001.06 1.06 6 6 0 000-8.485z"/>
           </svg>
            ) : (
             


<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2071 7.20711C18.5976 6.81658 18.5976 6.18342 18.2071 5.79289C17.8166 5.40237 17.1834 5.40237 16.7929 5.79289L5.79289 16.7929C5.40237 17.1834 5.40237 17.8166 5.79289 18.2071C6.18342 18.5976 6.81658 18.5976 7.20711 18.2071L18.2071 7.20711Z" fill="#000000"/>
<path d="M10.8639 8.6L15.3 5.87158L10.5716 10.6H8V13.1716L6.33126 14.8403C6.12404 14.5831 6 14.256 6 13.9V10.1C6 9.27157 6.67157 8.6 7.5 8.6H10.8639Z" fill="#000000"/>
<path d="M16 16.2109L12.6673 14.1611L11.2135 15.615L15.7142 18.3831C16.7136 18.9978 18 18.2788 18 17.1055V8.82844L16 10.8284V16.2109Z" fill="#000000"/>
</svg>


   </svg>

            
            )}
          </button>
          <a
            href="https://www.youtube.com/watch?v=b7RNiZ3eUxc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-2 py-2 bg-red-600/80 hover:bg-red-700/90 backdrop-blur-sm text-white rounded-full shadow-lg transition"
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
