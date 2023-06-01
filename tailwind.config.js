const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		...defaultTheme,
		extend: {
			colors: {
				"primary-color": "var(--color-primary)",
				"secondary-color": "var(--color-secondary)",
				white: "#FDFDFD",
				black: "#1C1C1C",
				brown: "#802200",
				"brown-900": "#1A0700",
				"brown-800": "#330E00",
				"brown-700": "#4D1400",
				"brown-600": "#661B00",
				"brown-500":"#802200",
				"brown-400": "#994E33",
				"brown-300": "#B37A66",
				"brown-200": "#CCA799",
				"brown-100": "#E6D3CC",
				blue: "#2574A9",
				"blue-900": "#071722",
				"blue-800": "#0F2E44",
				"blue-700": "#164665",
				"blue-600": "#1E5D87",
				"blue-500":"#2574A9",
				"blue-400": "#5190BA",
				"blue-300": "#7CACCB",
				"blue-200": "#A8C7DD",
				"blue-100": "#D3E3EE",
				green: "#1B7742",
				"green-900": "#05180D",
				"green-800": "#0B301A",
				"green-700": "#104728",
				"green-600": "#165F35",
				"green-500":"#1B7742",
				"green-400": "#499268",
				"green-300": "#76AD8E",
				"green-200": "#A4C9B3",
				"green-100": "#D1E4D9",
				red: "#DC2A2A",
				"red-900": "#2C0808",
				"red-800": "#581111",
				"red-700": "#841919",
				"red-600": "#B02222",
				"red-500":"#DC2A2A",
				"red-400": "#E35555",
				"red-300": "#EA7F7F",
				"red-200": "#F1AAAA",
				"red-100": "#F8D4D4",
				"dark-gray-400":"#333333",
				"dark-gray-300":"#3C3C3C",
				"dark-gray-200":"#6B6B6B",
				"dark-gray-100":"#9C9C9C",
				"light-gray-400":"#B9B9B9",
				"light-gray-300":"#D8D8D8",
				"light-gray-200":"#EAEAEA",
				"light-gray-100":"#F8F8F8",

				...defaultTheme.colors,
			},
			backgroundColor: (theme) => ({
				...theme("colors"),
			}),
			animation: {
				"bounce-high": "bounce 1s infinite",
			},
		},
		fontFamily: {
			signika: ["Signika", ...defaultTheme.fontFamily.sans],
			ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		borderRadius: {
			sm: "0.125rem",
			default: "0.25rem",
			md: "0.375rem",
			lg: "0.5rem",
			full: "9999px",
			large: "35%",
			xlarge: "60%",
		},
	},
	plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
