import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#EB660C",
          "orange-light": "#FF7A1A",
          "orange-dark": "#C85207",
          navy: "#11253E",
          "navy-dark": "#0B1829",
          "navy-light": "#193557",
          dark: "#060A10",
          card: "#0D1A2D",
          "card-hover": "#13253F",
          border: "#1C3352",
        },
      },
      fontFamily: {
        syncopate: ["Syncopate", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
      boxShadow: {
        "orange-glow": "0 0 25px -5px rgba(235, 102, 12, 0.4)",
        "orange-glow-lg": "0 0 45px -5px rgba(235, 102, 12, 0.5)",
        "navy-glow": "0 0 30px -10px rgba(17, 37, 62, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
