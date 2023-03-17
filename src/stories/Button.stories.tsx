// import React from "react";
import Button from "@/components/common/buttons";
import { AiOutlineSend } from "react-icons/ai";

// storiesOf("Button", module)
// 	.add("Primary Button", () => (
// 		<Button
// 			label="Click me!"
// 			onClick={action("clicked")}
// 			bgColor="bg-primary-color"
// 		/>
// 	))
// 	.add("Disabled Button", () => <Button label="I'm disabled" />)
// 	.add("Button with Icon", () => (
// 		<Button
// 			label="Add Item"
// 			icon={IoIosAdd}
// 			iconPosition="left"
// 			textColor="text-gray-800"
// 			onClick={action("icon clicked")}
// 		/>
// 	))
// 	.add("Button with Loading", () => (
// 		<Button
// 			label="Loading"
// 			bgColor="bg-primary-color"
// 			textColor="text-gray-800"
// 		/>
// 	));

export default {
	component: Button,
	icon: AiOutlineSend,
	args: {
		deactivated: true,
		loading: false,
		label: "Notify me",
		iconPosition: "right",
		rootClass:
			"rounded-lg font-bold col-auto mt-8 w-auto md:w-[210px] bg-red-500 hover:bg-red-500/25",
	},
};

export const Default = {
	args: {
		deactivated: true,
		loading: false,
		label: "Notify me",
		iconPosition: "right",
		rootClass:
			"rounded-lg font-bold col-auto mt-8 w-auto md:w-[210px] bg-red-500 hover:bg-red-600",
	},
};

// export const Default = () => (
// 	<Button
// 		icon={AiOutlineSend}
// 		label="Notify me"
// 		type="submit"
// 		rootClass="rounded-lg font-bold col-auto mt-8 w-auto md:w-[210px]"
// 		iconPosition="right"
// 	/>
// );

// export const Outlined = () => (
// 	<Button
// 		icon={AiOutlineSend}
// 		label="Notify me"
// 		type="submit"
// 		rootClass="rounded-lg font-bold col-auto mt-8 w-auto md:w-[210px] bg-red-500 hover:bg-red-600"
// 		iconPosition="right"
// 	/>
// );
