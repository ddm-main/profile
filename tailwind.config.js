/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#08090c",
        panel: "#0f1117",
        panel2: "#151822",
        line: "#232733",
        text: "#eef0f3",
        muted: "#8b93a3",
        accent: "#e8a33d",
        "accent-dim": "#8a6a35",
        ok: "#4de6a8",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%,49%": { opacity: 1 },
          "50%,100%": { opacity: 0 },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
