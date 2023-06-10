/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import Countdown from "@/components/countdown";
import CheckboxButton from "@/components/common/buttons/CheckboxButton";
import MainHeader from "@/components/header/MainHeader";

import {
	FaFacebookF,
	FaFacebook,
	FaTwitter,
	FaLinkedinIn,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import IconButton from "@/components/common/buttons/IconButton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MailingAddress from "@/components/form/MailingAddress";
import {
	Checkbox,
	PasswordField,
	Select,
	TextField,
} from "@/components/form/InputField";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import CodeInput from "@/components/form/CodeInput";
import Footer from "@/components/footer/Footer";
import Slider from "@/components/slider";
import WideIconButton from "@/components/common/buttons/WideIconButton";
import Table from "@/components/table";
import RestaurantCardList from "@/components/card/RestaurantCardList";
import Cart, { CartItem } from "@/components/cart";
import Accordion from "@/components/accordion";
import Tabs, { TabProps } from "@/components/common/tab";
import YouMightLike, { YouMightLikeCardItem } from "@/components/youMightLike";
import Button from "../components/common/buttons";
import SearchBar from "../components/searchBar";
import SimilarVendorCard from "../components/card/SimilarVendorCard";
import ChefRatingCard from "../components/card/ChefRatingCard";
import VendorCard from "../components/card/VendorCard";
import chefImage1 from "../../public/assets/svg/ChefProfile.svg";
import foodImage from "../../public/assets/images/food.jpg";
import foodImage2 from "../../public/assets/svg/foods/souvlaki.svg";
import foodImage3 from "../../public/assets/svg/foods/blackSalad.svg";
import foodImage4 from "../../public/assets/images/sandwich.jpg";
import userImage from "../../public/assets/images/user-demo.png";

const ComponentPage = () => {
	const [selectedValue, setSelectedValue] = useState<string>("");
	const { t } = useTranslation("accounts");
	const [code, setCode] = useState("");
	const form = useForm({
		defaultValues: {},
	});

	const images = [
		<img src="https://via.placeholder.com/150" alt="Image" />,
		<img src="https://via.placeholder.com/150" alt="Image" />,
		<img src="https://via.placeholder.com/150" alt="Image" />,
		<img src="https://via.placeholder.com/150" alt="Image" />,
	];

	const description = (
		<div className="w-2/3 flex flex-col justify-center items-center">
			<p className="text-xl font-bold text-center text-primary-color mt-10">
				{t("easy_ordering")}
			</p>
			<p className="text-gray-500 text-lg text-center my-5 ">
				{t("sign_in_to_explore")}
			</p>
		</div>
	);

	const { handleSubmit, register } = form;

	const handleSubmitForm = () => {};

	const tableData = [
		{ name: "John", age: 25, color: "red", weight: "90kg", height: "178cm" },
		{ name: "Jane", age: 30, color: "blue", weight: "80kg", height: "180cm" },
		{ name: "Robert", age: 11, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Bob", age: 15, color: "yellow", weight: "50kg", height: "178cm" },
		{ name: "Paul", age: 45, color: "gray", weight: "80kg", height: "178cm" },
		{ name: "Emma", age: 34, color: "white", weight: "76kg", height: "178cm" },
		{ name: "Mary", age: 25, color: "green", weight: "120kg", height: "195cm" },
		{ name: "Anna", age: 31, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Frank", age: 67, color: "blue", weight: "65kg", height: "158cm" },
		{
			name: "Charles",
			age: 45,
			color: "black",
			weight: "80kg",
			height: "178cm",
		},
		{ name: "Bob", age: 18, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Thomas", age: 19, color: "red", weight: "58kg", height: "158cm" },
		{ name: "William", age: 20, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Clara", age: 47, color: "red", weight: "99kg", height: "178cm" },
		{ name: "Alice", age: 50, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Emily", age: 22, color: "red", weight: "86kg", height: "178cm" },
		{ name: "Leo", age: 39, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Lisa", age: 41, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Thomas", age: 19, color: "red", weight: "80kg", height: "178cm" },
		{ name: "William", age: 20, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Clara", age: 47, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Alice", age: 50, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Emily", age: 22, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Leo", age: 39, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Lisa", age: 41, color: "red", weight: "80kg", height: "178cm" },
	];

	const tableColumns = [
		{ Header: "Name", accessor: "name" },
		{ Header: "Age", accessor: "age" },
		{ Header: "Color", accessor: "color" },
		{ Header: "Weight", accessor: "weight" },
		{ Header: "Height", accessor: "height" },
	];

	const restaurants = [
		{
			imageUrl: "",
			name: "Kris Hamburger",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Stella Vegas",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Carisha pancakes",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Boli Salads",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Maya’s Cake",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Stella veges",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Suika Japanese",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Jollibeee",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Sushi Mura",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Breka",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Burger Queen",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Indian Sula",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Subwayy",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Pizza Hut",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
	];

	type Product = {
		id: number;
		name: string;
		price: number;
	};

	const [products] = useState<Product[]>([
		{ id: 1, name: "Burger", price: 12.99 },
		{ id: 2, name: "Fries", price: 3.99 },
		{ id: 3, name: "Coke", price: 2.99 },
	]);

	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const handleAddToCart = (product: Product) => {
		const existingItem = cartItems.find((item) => item.id === product.id);
		if (existingItem) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			setCartItems((prevCartItems) => [
				...prevCartItems,
				{
					id: product.id,
					name: product.name,
					price: product.price,
					quantity: 1,
				},
			]);
		}
	};

	const handleRemoveFromCart = (itemId: number) => {
		setCartItems((prevCartItems) =>
			prevCartItems.filter((item) => item.id !== itemId)
		);
	};

	const handleSearch = () => {};

	// Items for testing accordion component
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

	// Items for testing similarVendorCard component
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

	const tabs: TabProps[] = [
		{
			label: "Tab 1 Title",
			children: <div>Content for tab 1</div>,
			onClick: () => {},
		},
		{
			label: "Tab 2 Title Longer",
			children: <div>Content for tab 2</div>,
			onClick: () => {},
		},
		{
			label: "Tab 3 Title Even Longer!!!!!!!! ",
			children: <div>Content for tab 3</div>,
			onClick: () => {},
		},
	];

	const vendorYouMightLikeItems: YouMightLikeCardItem[] = [
		{
			id: 1,
			image: "/assets/images/food.jpg",
			name: "Vendor Name 1",
			address: "123 Main St, Vancouver, BC V1A 1A1",
			minTime: 30,
			maxTime: 60,
			serviceType: "Delivery",
			price: 50.0,
			review: 4.5,
		},
		{
			id: 2,
			image: "/assets/images/food.jpg",
			name: "Vendor Name 2",
			address: "123 Main St, Vancouver, BC V1A 1A1",
			minTime: 60,
			maxTime: 90,
			serviceType: "Pick up",
			price: 75.28,
			review: 4.0,
		},
	];

	// Items for testing ChefRatingCard component
	const chefRatingCardItem = [
		{
			id: 1,
			userName: "William",
			userImage,
			chefName: "Mary",
			ratingDate: "Mar. 20. 2023",
			chefRating: 4.3,
			comment:
				"Delicious!! Mary always does an excellent job. We can't wait until the next time!!",
		},
	];

	// Items for testing VendorCard component
	const vendorCardItem = [
		{
			id: 1,
			title: "Mary's Kitchen",
			isNew: true,
			bgImage: foodImage4,
			chefImage: chefImage1,
			chefRating: 4.3,
			deliveryTime: "20-30",
			deliveryFee: 5,
			specialty: "India | Punjabi",
		},
	];

	return (
		<div>
			<MainHeader />
			<Countdown />
			<div className="flex justify-center gap-5">
				<IconButton icon={FaFacebookF} color="text-primary-color" href="" />
				<IconButton icon={FaTwitter} color="text-primary-color" href="" />
				<IconButton icon={FaLinkedinIn} color="text-primary-color" href="" />
			</div>
			<div className="flex flex-col items-center gap-5">
				<Button
					icon={AiOutlineSend}
					rootClass="text-white gap-2"
					label="Notify me"
					onClick={() => {}}
					iconPosition="right"
				/>
				{/* Social Auth buttons */}
				<WideIconButton label="Sign in with Google" icon={FcGoogle} />
				<WideIconButton
					label="Sign in with Facebook"
					icon={FaFacebook}
					iconColor="#1877F2"
				/>
				<WideIconButton
					label="Sign in with Twitter"
					icon={FaTwitter}
					iconColor="#1DA1F2"
				/>
				{/* Sign-in button */}
				<WideIconButton
					label="Sign in"
					textColor="text-white"
					bgColor="bg-primary-color"
					disabled
				/>
				<WideIconButton
					label="Sign in"
					textColor="text-white"
					bgColor="bg-primary-color"
				/>
				<WideIconButton
					label="Get Started"
					textColor="text-white"
					bgColor="bg-primary-color"
				/>
			</div>

			{/* Search Bar */}
			<div className="flex flex-col items-center gap-5 my-40">
				<SearchBar placeholder="Anywhere" onSearch={handleSearch} />
			</div>

			{/* Checkbox Button Group */}
			<div className="flex flex-col sm:flex-row justify-center sm:mx-10 mx-10 gap-5 mt-10">
				<CheckboxButton
					name="customer"
					label="I am a Customer"
					value={selectedValue}
					isChecked={selectedValue === "customer"}
					handleClick={(data) => {
						setSelectedValue(data);
					}}
				/>
				<CheckboxButton
					name="vendor"
					label="I am a Vendor"
					value={selectedValue}
					isChecked={selectedValue === "vendor"}
					handleClick={() => setSelectedValue("vendor")}
				/>
				<CheckboxButton
					name="driver"
					label="I am a Driver"
					value={selectedValue}
					isChecked={selectedValue === "driver"}
					handleClick={() => setSelectedValue("driver")}
				/>
			</div>
			<div className="h-96">
				<Slider description={description} slides={images} />
			</div>

			{/* Accordion */}
			<div className="flex flex-col justify-center items-center gap-5 mx-10 px-20 my-5">
				<h1>Accordion</h1>
				<Accordion items={items} />
			</div>

			{/* Form */}
			<FormProvider {...form}>
				<form onSubmit={handleSubmit(handleSubmitForm)}>
					<div className="p-10">
						<b>Code input</b>
						<CodeInput
							code={code}
							onUpdate={(data) => {
								setCode(data.trim());
							}}
							onSubmit={() => {}}
						/>

						<br />
						<br />

						<MailingAddress
							description={t("tellUsWhere")}
							title={t("mailingAddress")}
							form={form}
							type="mailing"
						/>

						<br />

						<Checkbox
							ref={register()}
							name="sameAsMailingAddress"
							className="my-5 text-primary-color"
							rootClass="w-full"
							label={t("sameAsCreditCard")}
						/>
						<TextField
							data-testid="signin-email"
							rootClass="mb-6"
							name="emailOrPhone"
							label={t("emailAddress")}
							placeholder="example@example.com"
							required
							ref={register({
								required: true,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: t("common:invalidEmail"),
								},
							})}
							autoComplete="username"
						/>

						<PasswordField
							data-testid="signin-password"
							rootClass="mb-2"
							name="password"
							label={t("password")}
							ref={register({ required: true })}
							required
							placeholder="∗∗∗∗∗∗∗∗"
							autoComplete="current-password"
						/>
						<Select
							rootClass="md:col-start-2 md:col-end-4 md:col-span-1 md:row-start-1 md:row-end-1"
							name="vehicleModel"
							label="Vehicle Model"
							placeholder="Select Vehicle Model"
							required
							ref={register({ required: true })}
							options={[]}
						/>
						<div>
							<h1>Heading font - Jost</h1>
							<p>Normal Text font - Monsterrat</p>
							<div className="flex flex-col">
								<div className="bg-primary-color">Primary color</div>
								<div className="bg-primary-color-deactivated">
									Primary color deactivated
								</div>
								<div className="bg-primary-color-light">
									Primary color light
								</div>
								<div className="text-font-light">Light color for text</div>
								<div className="border border-border-color">Border color</div>
								<div className="bg-gray-modern">Gray modern bg color</div>
							</div>
						</div>
					</div>
				</form>
			</FormProvider>
			<h1>Table Component</h1>
			<Table tableTitle="Table Title" data={tableData} columns={tableColumns} />
			<div className="flex flex-col gap-4 m-10">
				<h1>Card Component</h1>
				<RestaurantCardList
					title="Restaurants Near you"
					restaurants={restaurants}
					itemsPerPage={2}
				/>
				<div className="container  px-10">
					<h1 className="text-2xl font-bold my-4">Menu</h1>
					<ul className="mb-10">
						{products.map((product) => (
							<li
								key={product.id}
								className="flex items-center justify-between py-2 border-b"
							>
								<span>{product.name}</span>
								<button
									onClick={() => handleAddToCart(product)}
									className="bg-primary-color text-white px-4 py-2 rounded-md"
								>
									Add to cart (${product.price.toFixed(2)})
								</button>
							</li>
						))}
					</ul>
					<Cart
						items={cartItems}
						onAddToCart={() => handleAddToCart(products[0])}
						onRemoveFromCart={handleRemoveFromCart}
					/>
				</div>

				{/* Similar vendor's card */}
				<div className="p-10">
					<h2>Similar Vendors</h2>
					<SimilarVendorCard items={similarVendorItems} />
				</div>

				<h1>Footer</h1>
				<Footer footerColor="dark" />
				<Tabs tabs={tabs} />
				<h1>Places you might like</h1>
				<YouMightLike items={vendorYouMightLikeItems} />

				{/* Chef's rating card */}
				<div className="my-10">
					<h2>Similar Chefs Near You</h2>
					<ChefRatingCard items={chefRatingCardItem} />
				</div>

				{/* New vendor's card */}
				<div className="my-10">
					<h2>Try Something New</h2>
					<VendorCard items={vendorCardItem} />
				</div>
			</div>
		</div>
	);
};

export default ComponentPage;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
		},
	};
}
