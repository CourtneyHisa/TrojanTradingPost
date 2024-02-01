import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "yel1": "#ffe29c",
        "yel2": "#fff3cf"
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
