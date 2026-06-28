import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{json}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Arial", "sans-serif"]
      },
      colors: {
        accent: "var(--accent)",
        ink: "var(--text-primary)",
        muted: "var(--text-muted)",
        page: "var(--page-bg)",
        surface: "var(--surface)"
      }
    }
  },
  plugins: []
};

export default config;
