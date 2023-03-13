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
				"onboarding-color": " var(--color-onboarding-color)",
				"secondary-color": "var(--color-secondary)",
				"primary-color-50": "#FEFBE8",
				red: "#EF4444",
				"font-light": "#718096",
				"border-color": "#D0D5DD",
				"border-neutral": "#E6E8F0",
				"gray-modern": "#FCFCFD",
				"grey-light": "#DDDDDD",
				"grey-dark": "#344054",
				"grey-lighter": "#B8BFCC",
				"progress-bar": "#3B82F6",
				"label-color": "#f2f2f2",
				"gray-40": "#515772",
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
