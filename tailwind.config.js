/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        green: {
          '1': "#20fc8f", 
        },
        pink: {
          hot: "#ff69b4",
        }
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
