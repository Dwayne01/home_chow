import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		supportFile: false,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setupNodeEvents(_on, _config) {
			// implement node event listeners here
		},
		baseUrl: "http://localhost:3003",
	},

	component: {
		devServer: {
			framework: "next",
			bundler: "webpack",
		},
	},
});
