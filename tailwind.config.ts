import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "sunny": {
          100: "#ffffe0",  // Very light yellow
          200: "#fdfd96",  // Light yellow
          300: "#f9e380",  // Yellow
          400: "#f6c96a",  // Yellow-orange
          500: "#f2b035",  // Main color
          600: "#e68a2e",  // Darker orange
          700: "#d87427",  // Orange-red
          800: "#c85e20",  // Darker orange-red
          900: "#b64819",  // Red
        },
      },
    },
  },
  plugins: [],
};
export default config;
