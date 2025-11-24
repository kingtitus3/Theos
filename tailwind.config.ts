import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        sand: "#F5EEE9",
        charcoal: "#1C1C1C",
        "accent-brick": "#8A4A3A",
        "accent-gold": "#C9A86C",
        parchment: "#FAF7F3",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", ...fontFamily.serif],
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      boxShadow: {
        glow: "0 20px 45px rgba(28,28,28,0.25)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
