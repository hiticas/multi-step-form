/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        lightblue1: "#EEF5FF",
        lightblue2: "#BFE1FD",
        darkblue: "#03295A",
      },
      backgroundImage: {
        sidebar: "url('../assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
