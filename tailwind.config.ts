import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #F9AE05, #B3BDD0)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
      colors:{
        bg:'#212529',
        mainBlue:'#0C2F6F',
        mainYellow:"#F9AE05",
        modalBlue:"#3378ED",
        modalYellow:"#FFDA78",
      }
    },
  },
  plugins: [],

};
export default config;
