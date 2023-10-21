import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: { "half": "50vh" },
      keyframes: {
        "open-curtain": {
          "0%": { width: "100%" },
          "100%": { width: "0%", display: "hidden" },
        },
        "curtain-message": {
          "0%": { transform: "translateY(-4rem)" },
          "50%": { transform: "translateY(0)" },
          "75%": { opacity: ".5" },
          "90%": { opacity: ".0" },
          "100%": { opacity: ".0", display: "none" },
        },
      },
      animation: {
        "open-curtain": "open-curtain 4s ease-in-out forwards",
        "curtain-message": "curtain-message 3s ease-in forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
