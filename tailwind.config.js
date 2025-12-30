/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#0a1f1a",
        "dark-green-light": "#0d2822",
        lime: "#d4ff3c",
        "header-bg": "rgba(28, 35, 35, 0.5)",
        "card-bg": "rgba(38, 47, 40, 0.4)",
        "input-bg": "#0C120D",
        "border-gray": "#373A41",
        "text-gray": "#66806D",
        "text-light": "#CECFD2",
        "text-white": "#F2F2F2",
        "text-value": "#F7F7F7",
        "text-label": "#7A9681",
        "button-bg": "#C4E429",
        "button-text": "#0F2232",
        divider: "#7A9681",
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(298.39deg, #001308 75.01%, #35443A 95.55%)",
        "gradient-toot":
          "linear-gradient(62.19deg, #FFFFFF 26.39%, #C8D1CB 117.3%, #D6C0A6 226.22%, #585858 331.84%)",
        "gradient-business":
          "linear-gradient(90.5deg, #FFFFFF -17.78%, #C8D1CB 24.85%, #D6C0A6 75.92%, #585858 125.45%)",
        "gradient-title":
          "linear-gradient(93.8deg, #FFFFFF 9.62%, #C8D1CB 35.55%, #D6C0A6 66.62%, #585858 96.75%)",
        "gradient-amount":
          "linear-gradient(289.5deg, #585858 -6.51%, #D6C0A6 39.83%, #C7D1CB 56.75%, #FFFFFF 73.68%)",
      },
      spacing: {
        64.14: "64.14px",
        755.86: "755.86px",
        195.86: "195.86px",
        63.86: "63.86px",
        24.77: "24.77px",
        9.42857: "9.42857px",
      },
      boxShadow: {
        "main-container": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "button-skeuomorphic":
          "inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18), inset 0px -2px 0px rgba(12, 14, 18, 0.05)",
      },
      borderColor: {
        "header-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        suisse: ["'Suisse Int'l'", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-gradient-toot": {
          background:
            "linear-gradient(62.19deg, #FFFFFF 26.39%, #C8D1CB 117.3%, #D6C0A6 226.22%, #585858 331.84%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
        ".text-gradient-business": {
          background:
            "linear-gradient(90.5deg, #FFFFFF -17.78%, #C8D1CB 24.85%, #D6C0A6 75.92%, #585858 125.45%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
        ".text-gradient-title": {
          background:
            "linear-gradient(93.8deg, #FFFFFF 9.62%, #C8D1CB 35.55%, #D6C0A6 66.62%, #585858 96.75%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
        ".text-gradient-amount": {
          background:
            "linear-gradient(289.5deg, #585858 -6.51%, #D6C0A6 39.83%, #C7D1CB 56.75%, #FFFFFF 73.68%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
