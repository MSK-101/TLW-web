/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        funnelDisplay: ["var(--font-funnel-display)"],
        funnelSans: ["var(--font-funnel-sans)"],
      },
    },
  },
  plugins: [],
};
