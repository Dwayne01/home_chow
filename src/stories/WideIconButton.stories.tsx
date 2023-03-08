import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FaFacebook } from "react-icons/fa";
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
	icon: FaFacebook,
	label: "Sign in with Google",
};
