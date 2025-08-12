// tailwind.config.js (add/merge these into your existing file)
module.exports = {
  // ...other config...
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"], // elegant headline
        ui: ["Inter", "system-ui", "sans-serif"], // body/subtitle
        mono: ['"Roboto Mono"', "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 60%": { opacity: "1" },
          "61%, 100%": { opacity: "0" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
};
