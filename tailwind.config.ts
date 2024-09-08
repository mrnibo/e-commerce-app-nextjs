import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			'text': '#050315',
			'background': '#fbfbfe',
			'primary': '#db4444',
			'secondary': '#d32d2d',
			'accent': '#42e26f',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
