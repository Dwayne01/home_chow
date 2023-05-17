import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import StoreLayout from "@/components/layout/StoreLayout";
import SearchBar from "@/components/searchBar";
import Accordion from "@/components/accordion";
import SimilarVendorCard from "@/components/card/SimilarVendorCard";
// import MainImage from "../../../public/assets/svg/StoreMain.svg";
import foodImage from "../../../public/assets/images/food.jpg";
import foodImage2 from "../../../public/assets/svg/foods/souvlaki.svg";
import foodImage3 from "../../../public/assets/svg/foods/blackSalad.svg";

const StorePage = () => {
	const handleSearch = () => {};

	const items = [
		{
			id: 1,
			title: "White Stew",
			price: 10.99,
			content:
				"Wings tossed in your choice of sauce, served with carrots, celery sticks, and dipping sauce. Choose at least one.",
			cardList: ["Mild Sauce", "Hot Sauce", "Medium Sauce"],
			image: foodImage,
		},
	];

	const similarVendorItems = [
		{
			id: 1,
			title: "Karisha Hambugers",
			price: "45.00",
			discount: "30%",
			isInStock: true,
			image: foodImage2,
		},
		{
			id: 2,
			title: "The Place Salad",
			price: "15.00",
			discount: "50%",
			isInStock: false,
			image: foodImage3,
		},
	];

	<div>
		<StoreLayout
			TopComponent={
				<SearchBar placeholder="Search..." onSearch={handleSearch} />
			}
			LeftComponent={<Accordion items={items} />}
			RightComponent={<SimilarVendorCard items={similarVendorItems} />}
			// MainImage={MainImage}
		/>
	</div>;
};

export default StorePage;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["common"])),
		},
	};
}
