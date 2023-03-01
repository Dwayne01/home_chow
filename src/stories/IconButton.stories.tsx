import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import IconButton from "../components/common/buttons/IconButton";

export default {
	title: "Button",
	component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
	<IconButton {...args} />
);

export const Facebook = Template.bind({});
Facebook.args = {
	icon: FaFacebookF,
	color: "#EAAA08",
	bgColor: "#FCFCFD",
	href: "facebook.com",
};

export const Twitter = Template.bind({});
Twitter.args = {
	icon: FaTwitter,
	color: "#EAAA08",
	bgColor: "#FCFCFD",
	href: "twitter.com",
};

export const LinkedIn = Template.bind({});
LinkedIn.args = {
	icon: FaLinkedinIn,
	color: "#EAAA08",
	bgColor: "#FCFCFD",
	href: "linkedin.com",
};

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
// 	title: "Example/Button",
// 	component: Button,
// 	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// 	argTypes: {
// 		backgroundColor: { control: "color" },
// 	},
// } as ComponentMeta<typeof Button>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
// 	primary: true,
// 	label: "Button",
// };

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
