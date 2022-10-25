/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [
    require("daisyui"),
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "mocha",
    }),
  ],
  daisyui: {
    themes: [],
  },
};
