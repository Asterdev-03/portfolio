/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // backfill: "#2c2c6c",
        colorbg: "#03045e",
        primary: "#0077B6",
        secondary: "#00B4D8",
        primaryalt: "#90E0EF",
        secondaryalt: "#CAF0F8",
        gold: "#FFD700",
        dark: "#020338",
      },
    },
  },
  plugins: [],
};
