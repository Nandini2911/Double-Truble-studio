/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dts-black": "#050507",
        "dts-charcoal": "#111118",
        "dts-gold": "#C9A96A",
        "dts-neon": "#46F3D8",
        "dts-neon-pink": "#FF3FA4",
        "dts-fog": "#F5F5F7",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "neon-soft": "0 0 20px rgba(70,243,216,0.35)",
        "neon-strong": "0 0 40px rgba(70,243,216,0.65)",
      },
    },
  },
  plugins: [],
};
