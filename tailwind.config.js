const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		...defaultTheme,
		extend: {
			colors: {
				"primary-color": "var(--color-primary)",
				"primary-color-deactivated": "var(--color-primary-deactivated)",
				"primary-color-light": "var(--color-primary-light)",
				"secondary-color": "var(--color-secondary)",
				"font-light": "#718096",
				"border-color": "#D0D5DD",
				"gray-modern": "#FCFCFD",
				"grey-light": "#DDDDDD",
				"grey-dark": "#344054",
				"green-dark": "#27AE60",
				...defaultTheme.colors,
			},
			backgroundColor: (theme) => ({
				...theme("colors"),
			}),
			animation: {
				"bounce-high": "bounce 1s infinite",
			},
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
