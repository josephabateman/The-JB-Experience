import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        // Warm charcoal used as the dark brand base
        ink: {
          DEFAULT: "#141210",
          900: "#141210",
          800: "#1f1c19",
          700: "#2b2723",
        },
        // Champagne / gold accent — signals premium wedding, high contrast with dark text
        gold: {
          50: "#fbf7ef",
          100: "#f5ead2",
          200: "#ead3a3",
          300: "#ddb96f",
          400: "#d0a24a",
          500: "#b8863b",
          600: "#9c6e2f",
          700: "#7d5726",
          800: "#654621",
          900: "#553b1f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
        stock: [defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
