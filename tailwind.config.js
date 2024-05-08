/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      font: ["Plus Jakarta Sans", "sans-serif"],
    },
    colors: {
      primary: '#056f7f',
      secondary: '#10d480',
      custom: '#eef6f3',
      customGray: '#f5f7fa',
      customGreen: '#E0F7ED'
    },
    spacing: {
      'marginBottom': '-200px', 
      'secondaryMb': '-70px'
    },
  },
};
export const important = true; 
export const plugins = [];
