import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF8",
          100: "#FBF6EC",
          200: "#F5EBDA",
          300: "#EEDFC4",
        },
        blush: {
          100: "#F7E4E1",
          200: "#EFCBC6",
          300: "#E3ACA4",
          400: "#D08C82",
        },
        brown: {
          400: "#9C7F68",
          500: "#7C5F4A",
          600: "#5E4633",
          700: "#473423",
          800: "#352617",
          900: "#241A10",
        },
        gold: {
          300: "#E3CC95",
          400: "#CFAE63",
          500: "#B8923F",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-worksans)", "sans-serif"],
      },
      borderRadius: {
        soft: "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 35px -12px rgba(71, 52, 35, 0.18)",
        card: "0 6px 24px -8px rgba(71, 52, 35, 0.14)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
