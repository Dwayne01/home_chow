import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import IconButton from "../components/common/buttons/IconButton";

export default {
	title: "Component/Button/IconButton",
	component: IconButton,
	argTypes: { clickHandler: { action: "clicked" } },
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
