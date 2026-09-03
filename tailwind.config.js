/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3F0E8",
        paper2: "#EAE5D9",
        paper3: "#E0DACB",
        ink: "#17150F",
        ink2: "#2A261D",
        muted: "#6E675A",
        faint: "#9A9284",
        line: "#DAD3C3",
        accent: "#C0522E",
        "accent-soft": "#E4A483",
        navy: "#1B2440",
        sage: "#5C7360",
      },
      fontFamily: {
        display: ["'Archivo Variable'", "Archivo", "Helvetica Neue", "sans-serif"],
        serif: ["'Instrument Serif'", "Georgia", "serif"],
        body: ["'Inter Variable'", "Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono Variable'", "'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.055em",
        supertight: "-0.075em",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        blink: { "0%,49%": { opacity: 1 }, "50%,100%": { opacity: 0 } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        drift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(3%,-4%) scale(1.06)" },
          "66%": { transform: "translate(-3%,3%) scale(0.96)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        blink: "blink 1.1s step-start infinite",
        float: "float 6s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
