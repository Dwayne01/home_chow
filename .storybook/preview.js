import "../src/styles/globals.css";
import { applyTheme } from "@/theme/utils";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

applyTheme();
