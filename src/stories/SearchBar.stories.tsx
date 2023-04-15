import SearchBar from "../components/searchBar/index";

export default {
	component: SearchBar,
	args: {
		onSearch: () => {},
		rootClass: "",
	},
};

export const Default = {
	args: {
		placeholder: "Where",
		width: "600px",
		iconBgColor: "bg-primary-color",
	},
};
