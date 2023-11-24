/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        overlay: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for the desired overlay darkness
      },
    },
  },
  plugins: [],
};
