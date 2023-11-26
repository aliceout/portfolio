/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "light-gradient":
          "linear-gradient(230deg, hsla(186, 33%, 94%, 1) 30%, hsla(184, 42%, 88%, 1) 80%)",
        "dark-gradient":
          "linear-gradient(230deg, hsla(222, 47%, 11%, 1) 30%, hsla(358, 43%, 50%, 1) 80%)",
      },
      fontFamily: {
        satisfy: ['"Satisfy"', "cursive"],
      },
      colors: {
        primary: "#5a9ca6",
        secondary: "#c43a3c",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
