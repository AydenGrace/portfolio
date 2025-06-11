/** @type {import('tailwindcss').Config} */
import {mtConfig} from "@material-tailwind/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundOpacity: ["active"],
      animation: {
        "star-movement-bottom":
          "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": {transform: "translate(0%, 0%)", opacity: "1"},
          "100%": {transform: "translate(-100%, 0%)", opacity: "0"},
        },
        "star-movement-top": {
          "0%": {transform: "translate(0%, 0%)", opacity: "1"},
          "100%": {transform: "translate(100%, 0%)", opacity: "0"},
        },
      },
    },
  },
  plugins: [mtConfig],
};
