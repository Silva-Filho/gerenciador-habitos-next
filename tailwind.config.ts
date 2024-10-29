import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { },
      fontFamily: {
        sans: ["var(--font-inter)", ],
        display: ["var(--font-dosis)", ],
      }
    },
  },
  plugins: [],
};
export default config;
