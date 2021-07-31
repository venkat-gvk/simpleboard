module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      inset: {
        c10: "9.5rem",
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover", "focus"],
      borderWidth: ["hover", "focus"],
      padding: ["hover", "focus"],
    },
  },
  plugins: [],
};
