/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        spinOnce: "spinOnce 0.5s ease-in-out",
        "scan-line": "scan-line 2s linear infinite",
        spinContinuous: "spin 5s linear infinite",
        zoom: "zoom 2s infinite ease-in-out",
        revolve: "revolve 5s   ease-in-out",
      },
      keyframes: {
        spinOnce: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(2000%)" },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1)" }, // Normal size
          "50%": { transform: "scale(1.1)" }, // Zoom in by 10%
        },
        revolve: {
          "0%": { transform: "rotate(0deg) translateX(0px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(0px) rotate(360deg)",
          },
        },
      },

      perspective: {
        none: "none",
        1000: "1000px",
      },
      rotate: {
        "y-180": "180deg",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      transformOrigin: {
        center: "center",
      },
      backgroundImage: {
        "student-card": "url('/public/6515.jpg')",
      },
    },
  },
  
  plugins: [
    function ({ addBase }) {
      addBase({
        'input[type="number"]': {
          "-moz-appearance": "textfield" /* Firefox */,
        },
        'input[type="number"]::-webkit-inner-spin-button': {
          "-webkit-appearance": "none" /* Chrome, Safari */,
          margin: "0",
        },
        'input[type="number"]::-webkit-outer-spin-button': {
          "-webkit-appearance": "none",
          margin: "0",
        },
      });
    },
  ],
};
