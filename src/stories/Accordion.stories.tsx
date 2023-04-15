import Accordion from "../components/accordion/index";
import foodImage from "../../public/assets/images/food.jpg";

export default {
	component: Accordion,
};

const items = [
	{
		title: "White Stew",
		price: 10.99,
		content:
			"Wings tossed in your choice of sauce, served with carrots, celery sticks, and dipping sauce. Choose at least one.",
		cardList: ["Mild Sauce", "Hot Sauce", "Medium Sauce"],
		image: foodImage,
	},
];

export const Default = {
	args: { items },
};
