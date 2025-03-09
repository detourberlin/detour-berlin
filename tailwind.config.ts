import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111111", // Matte black
        secondary: "#D4D4D2", // Platinum/silver
        accent: "#878787", // Subtle luxury accent
        dark: "#1A1A1A", // Fix for text-dark class
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
