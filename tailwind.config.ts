import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url(/background.png)",
        "course-bg": "url(/xrpCourse/coursebg.png)",
        "cover-bg": "url(/xrpCourse/cover.png)",
        "mcq-bg": "url(/mcqbg.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "decode-black": "#070C14",
        "decode-white": "#ffff",
        "loader": "rgb(248, 207, 211)"
      }
    },
  },
  plugins: [],
};
export default config;
