module.exports = {
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-controls",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
	},
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
		});
		return config;
	},
};
