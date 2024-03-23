import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    colors: {
      "defaultColor": "#333",
      "hoverColor": "#006ee7"
    },
    extend: {
      borderColor: {
        "colorHover": "#006ee7",
        "colorDefault": "#333"
      }
    }
  },
  plugins: [],
};
export default config;
