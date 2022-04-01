module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'blue': {
          original: "hsl(246, 80%, 60%)",
          play: "hsl(195, 74%, 62%)",
          veryDark: "hsl(226, 43%, 10%)",
          dark: "hsl(235, 46%, 20%)",
          desaturated: "hsl(235, 45%, 61%)",
          pale: "hsl(236, 100%, 87%)",
        },
        'red': {
          work: "hsl(15, 100%, 70%)",
          study: "hsl(348, 100%, 68%)",
        },
        'green': {
          exercise: "hsl(145, 58%, 55%)",
        },
        'violet': {
          social: "hsl(264, 64%, 52%)",
        },
        'orange': {
          selfCare: "hsl(43, 84%, 65%)"
        },
      }
    },
  },
  plugins: [],
}