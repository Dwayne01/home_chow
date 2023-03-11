import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/common/buttons/index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Primary",
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	// 	backgroundColor: { control: "color" },
	// },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	textColor: "red",
	label: "Click ME",
	iconPosition: "right",
	rootClass: "p-[20px]",
	type: "button",
	disabled: true,
	id: "56",
	loading: false,
	bgColor: "red",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
// 	label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
// 	size: "large",
// 	label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
// 	size: "small",
// 	label: "Button",
// };
