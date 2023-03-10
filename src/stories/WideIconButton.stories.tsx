import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import WideIconButton from "../components/common/buttons/WideIconButton";

export default {
	title: "Component/Button/WideIconButton",
	component: WideIconButton,
	argTypes: { clickHandler: { action: "clicked" } },
} as ComponentMeta<typeof WideIconButton>;

const Template: ComponentStory<typeof WideIconButton> = (args) => (
	<WideIconButton {...args} />
);

export const SignInGoogle = Template.bind({});
SignInGoogle.args = {
	icon: FaGoogle,
	label: "Sign in with Google",
};

export const SignInFacebook = Template.bind({});
SignInFacebook.args = {
	icon: FaFacebook,
	label: "Sign in with Google",
};

export const SignInTwitter = Template.bind({});
SignInTwitter.args = {
	icon: FaTwitter,
	label: "Sign in with Google",
};

export const SignIn = Template.bind({});
SignIn.args = {
	label: "Sign in",
	textColor: "text-white",
	bgColor: "bg-primary-color",
};

export const GetStarted = Template.bind({});
SignIn.args = {
	label: "Get Started",
	textColor: "text-white",
	bgColor: "bg-primary-color",
};
