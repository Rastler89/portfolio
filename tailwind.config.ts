import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#2196f3",
        //secondary: "#0072ca",
        tertiary: "#815fbf",
        //quaternary: "#7681de",
        //quinary: "#33c6f1",
        darkBg: "#252440",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg,rgba(170,54,124,0.5) -5.91%, rgba(74,47,189,0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
