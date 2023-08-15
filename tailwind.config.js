/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Common mobile sizes
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens

        "landscape-xs": {
          raw: "(max-height: 300px)",
        },
        // Landscape mode (mobile)
        "landscape-sm": {
          raw: "(max-height: 450px)",
        },
        "landscape-md": {
          raw: "(max-height: 768px)",
        },
        "landscape-lg": {
          raw: "(max-height: 1024px)",
        },
        "custom-sm": "480px",
        "custom-md": "768px",
        "custom-lg": "1024px",
        betterhover: { raw: "(hover: hover)" },
      },
    },
    keyframes: {
      wave: {
        "0%": { transform: "rotate(0.0deg)" },
        "10%": { transform: "rotate(14deg)" },
        "20%": { transform: "rotate(-8deg)" },
        "30%": { transform: "rotate(14deg)" },
        "40%": { transform: "rotate(-4deg)" },
        "50%": { transform: "rotate(10.0deg)" },
        "60%": { transform: "rotate(0.0deg)" },
        "100%": { transform: "rotate(0.0deg)" },
      },
    },
    animation: {
      "waving-hand": "wave 2s linear infinite",
    },
  },
  plugins: [],
};
