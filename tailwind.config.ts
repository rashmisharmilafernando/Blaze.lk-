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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px'
      },
      textStrokeColor: {
        black: '#000',
        white: '#fff',

      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({  }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
          'text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
          'text-stroke-width': '2px',

        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': 'black',
          'text-stroke-color': 'black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': 'white',
          'text-stroke-color': 'white',
        },
        'font-poppins': {
          ' subsets': 'latin',
          '  weight': '700 '
          
        }
      };

      // addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
