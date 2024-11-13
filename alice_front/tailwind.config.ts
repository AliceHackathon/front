import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "character-gradient": "var(--character-gradient)",
      },
      fontFamily: {
        gmarket: ["GmarketSansMedium", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "red-00": "#FFF8F6",
        "red-01": "#FFF2F0",
        "red-02": "#FFD1CA",
        "red-03": "#FBA79E",
        "red-04": "#DE4432",
        "red-0401": "#E44735",
        "red-05": "#7D1212",
        "red_04-10": "rgba(222, 68, 50, 0.1)",
        character_gradient:
          "linear-gradient(to bottom right, #FBA79E, #E44735)",
        "red-0402": "#C11B1B",
      },
    },
  },
  plugins: [],
} satisfies Config;
