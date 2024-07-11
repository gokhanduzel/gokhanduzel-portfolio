module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1e3a8a",
        "darker-blue": "#1e40af",
        "darkest-blue": "#1e3a8a",
        "custom-dark": "#0f172a",
        "custom-darker": "#0e141b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg, var(--tw-gradient-stops))",
        "gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
      },
      transitionDuration: {
        2000: "2000ms", // Adds a 2000ms duration
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-out",
        slideInLeft: "slideInLeft 2s ease-out",
        slideInRight: "slideInRight 2s ease-out",
      },
      dropShadow: {
        redGlow: [
          "0 0px 10px rgba(255, 0, 0, 0.7)", // Red glow
          "0 0px 65px rgba(255, 0, 0, 0.2)", // Red glow
        ],
        blueGlow: [
          "0 0px 10px rgba(0, 0, 255, 0.7)", // Blue glow
          "0 0px 65px rgba(0, 0, 255, 0.2)", // Blue glow
        ],
        greenGlow: [
          "0 0px 10px rgba(0, 255, 0, 0.7)", // Green glow
          "0 0px 65px rgba(0, 255, 0, 0.2)", // Green glow
        ],
        yellowGlow: [
          "0 0px 10px rgba(255, 255, 0, 0.7)", // Yellow glow
          "0 0px 65px rgba(255, 255, 0, 0.2)", // Yellow glow
        ],
        purpleGlow: [
          "0 0px 10px rgba(128, 0, 128, 0.7)", // Purple glow
          "0 0px 65px rgba(128, 0, 128, 0.2)", // Purple glow
        ],
        tealGlow: [
          "0 0px 10px rgba(0, 255, 255, 0.7)", // Teal glow
          "0 0px 65px rgba(0, 255, 255, 0.2)", // Teal glow
        ],
        orangeGlow: [
          "0 0px 10px rgba(255, 165, 0, 0.7)", // Orange glow
          "0 0px 65px rgba(255, 165, 0, 0.2)", // Orange glow
        ],
        pinkGlow: [
          "0 0px 10px rgba(255, 192, 203, 0.7)", // Pink glow
          "0 0px 65px rgba(255, 192, 203, 0.2)", // Pink glow
        ],
        cyanGlow: [
          "0 0px 10px rgba(0, 255, 255, 0.7)", // Cyan glow
          "0 0px 65px rgba(0, 255, 255, 0.2)", // Cyan glow
        ],
        whiteGlow: [
          "0 0px 10px rgba(255, 255, 255, 0.7)", // White glow
          "0 0px 65px rgba(255, 255, 255, 0.2)", // White glow
        ],
      },
    },
  },
  plugins: [],
};
