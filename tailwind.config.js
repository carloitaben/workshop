import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        slideDown: "slideDown 500ms cubic-bezier(0, 0, 0.2, 1)",
        slideUp: "slideUp 500ms cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
}
export default config;
