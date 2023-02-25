const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"border-color": " #FFAF02",
				"primary-color": "#FFAF02",
				white: "#FCFCFC",
				"primary-color-light": "#FEFDF0",
				"secondary-color": "var(--color-secondary)",
				...defaultTheme.colors,
			},
			backgroundColor: (theme) => ({
				...theme("colors"),
			}),
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
};
