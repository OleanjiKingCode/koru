/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        surface: "var(--bg)"
      },
      boxShadow: {
        card: "0 20px 50px rgba(93, 63, 211, 0.18)",
        glow: "0 10px 30px rgba(255, 215, 0, 0.25)"
      },
      keyframes: {
        "gradient-move": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        "shimmer-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" }
        }
      },
      animation: {
        "gradient-move": "gradient-move 14s ease infinite",
        "fade-up": "fade-up 0.8s ease forwards",
        shimmer: "shimmer-slide 1.5s linear infinite"
      }
    }
  },
  plugins: []
};
