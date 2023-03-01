import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckboxButton from "../components/common/buttons/CheckboxButton";

export default {
	title: "Component/Button/CheckboxButton",
	component: CheckboxButton,
} as ComponentMeta<typeof CheckboxButton>;

const Template: ComponentStory<typeof CheckboxButton> = (args) => (
	<CheckboxButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	label: "I am a Driver",
	name: "driver",
	value: "driver",
	isChecked: false,
};
