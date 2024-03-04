import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    colors: {
      'color1': '#1D1F26',
      'color2': '#111320',
      'color3': '#171924',
      'color4': '#343642',
      'color5': '#494C5C',
      'color6': '#EEEEEE',
      'color7': '#C3C3C3',
      'color8': '#FFFFFF',
    },
    extend: {
      dropShadow: {
        '8xl': '0px 0px 8px #FFFFFF40'
      },
    }
  },
  plugins: [],
};
export default config;
