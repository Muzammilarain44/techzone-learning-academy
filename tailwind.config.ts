import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050A1E",
          900: "#071231",
          800: "#0B1B45",
          700: "#12265C",
          600: "#1B357A",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(56,189,248,0.25)",
        "glow-purple": "0 0 40px rgba(139,92,246,0.28)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
