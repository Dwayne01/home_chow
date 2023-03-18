import Button from "@/components/common/buttons";
import { AiOutlineSend } from "react-icons/ai";

export default {
	component: Button,
	args: {
		disabled: false,
		rootClass:
			"rounded-lg font-bold col-auto w-auto md:w-[210px] text-white gap-4",
	},
};

export const Default = {
	args: {
		label: "Notify me",
		loading: false,
	},
};

export const Outlined = {
	args: {
		rootClass:
			"rounded-lg bg-white text-primary-color  font-bold  border border-primary-color md:w-[210px]",
		label: "Notify me",
		loading: false,
	},
};

export const ButtonWithIconLeft = {
	args: {
		icon: AiOutlineSend,
		iconPosition: "left",
		label: "Notify me",
		loading: false,
	},
};

export const ButtonWithIconRight = {
	args: {
		icon: AiOutlineSend,
		iconPosition: "right",
		label: "Notify me",
		loading: false,
	},
};

export const IconButton = {
	args: {
		icon: AiOutlineSend,
		iconPosition: "left",
		rootClass: "rounded-lg font-bold col-auto w-auto text-white",
	},
};
