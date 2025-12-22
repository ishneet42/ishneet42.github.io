import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        border: "var(--border)",
        foreground: "var(--foreground)",
        subtle: "var(--subtle)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        "accent-soft": "var(--accent-soft)",
      },
    },
  },
  plugins: [],
};

export default config;
