"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 z-20">
<a
        href="https://www.youtube.com/watch?v=b7RNiZ3eUxc"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 mr-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M..." />
        </svg>
        Watch on YouTube
      </a>



      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="text-gray-300 rounded-full outline-none focus:outline-none p-2 bg-gray-800 dark:bg-gray-700">
          <span className="sr-only">Light Mode</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="text-gray-500 rounded-full outline-none focus:outline-none p-2 bg-gray-800 dark:bg-gray-700">
          <span className="sr-only">Dark Mode</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
