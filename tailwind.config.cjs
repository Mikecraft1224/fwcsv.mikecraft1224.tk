/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    mode: "jit",
    colors:{
      font: "#ffffff",
      background: "#111",
      // header
      mainhb: "#999999",
      mainhf: "#ffffff",
      mainhoverhf: "#111",
      hoverhb: "#3b3b3b",
      hoverhf: "#ffffff",
      drophb: "#5b5b5b"
    },
		extend: {}
	},

	plugins: []
};

module.exports = config;

