module.exports = {
  purge: [
    "./src/Components/QuizArea.jsx",
    "./src/Components/ScoreBoard.jsx",
    "./src/Components/StartScreen.jsx",
    "./src/App.jsx",
    "./src/index.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        three: "var(--color-three)",
        four: "var(--color-four)",
        five: "var(--color-five)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
