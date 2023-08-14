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

        // Custom media queries (you can adjust the values)
        "custom-sm": "480px",
        "custom-md": "768px",
        "custom-lg": "1024px",

        betterhover: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
