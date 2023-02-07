const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [],
	theme: {
		...defaultTheme,
		extend: {
			colors: {
				"border-color": " #CBC4BC",
				"primary-color": "var(--color-primary)",
				"secondary-color": "var(--color-secondary)",
				"tertiary-color": "var(--color-tertiary)",
				"footer-color": "var(--color-footer)",
				"header-border-color": "var(--color-header-border)",
				"connector-tip-fill": "#4A5468",
				ice: "#FFFFFF",
				spruce: "#004F6C",
				sea: "#05A1C6",
				grass: "#50B848",
				granite: "#3E3935",
				"granite-dark": " #2C2E35",
				sky: "#B3E5FC",
				hemlock: "#046A38",
				sunset: "#E8927C",
				arbutus: "#FA4616",
				stone: "#9C948D",
				sand: "#CBC4BC",
				"wf-base-600": "#717D96",
				"wf-base-400": "#CBD2E0",
				current: "currentColor",
				"stone-light": "#9C948D1A",
				...defaultTheme.colors,
			},
			backgroundColor: (theme) => ({
				...theme("colors"),
			}),
		},
	},
	variants: {
		backgroundColor: ["active"],
	},
	plugins: [require("@tailwindcss/forms")],
};
