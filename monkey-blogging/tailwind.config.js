/** @type {import('tailwindcss').Config} */
import { COLORS } from "./src/utils/constants";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: COLORS.primary,
        gradient1: "#00A7B4",
        gradient2: "#A4D96C",
      },
    },
  },
  plugins: [],
};
