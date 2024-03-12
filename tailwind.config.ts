import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "brown1": "#693c22",
        "brown2": "#38221b",
        "brown3": "#7d5241",
        "tan1": "#b8976f",
        "tan2": "#caa06b",
        "cream1": "#fbf6f1",
        "beige1": "#fdf3d5",
        "yellow1": "#ffbb4e",
        "yellow2": "#dab365",
        "yellow3": "#ffde8c",
        "signborder1": "#5f4b44",
        "signborder2": "#695956",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mhs: ['"Proxima "', 'sans-serif']
      },
      fontSize: {
        '4.5xl': '40px',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
} satisfies Config;
