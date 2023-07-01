import {
	Product,
	ProductResponse,
	SearchProductPayload,
} from "@/types/product";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../common/buttons";
import Tabs, { TabProps } from "../common/tab";
import MenuList from "./menuList";
import ScheduleMenu from "./ScheduleMenu";
import WeeklyMenu from "./WeeklyMenu";

const Menu = ({
	handleSearchProduct,
}: {
	handleSearchProduct: (params: any) => Promise<ProductResponse>;
}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [menuLists, setMenuLists] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const payload: SearchProductPayload = {
					documents: [],
					query: {},
					sort: {
						created_at: -1,
					},
					limit: 10,
					skip: 0,
					update: "string",
				};

				const res = await handleSearchProduct(payload);
				if (res.status_code === 200) {
					setMenuLists(res.body);
				}
			} catch (error) {
				// console.log(error);
			}
		};

		fetchProducts();
	}, [handleSearchProduct]);

	const router = useRouter();

	const tabs: TabProps[] = [
		{
			label: "Menu",
			children: (
				<div>
					<MenuList />
				</div>
			),
		},
		{
			label: "Schedule",
			children: <ScheduleMenu />,
		},
		{
			label: "Weekly Menu",
			children: (
				<div>
					<WeeklyMenu />
				</div>
			),
		},
		{
			label: "Category",
			children: <div>Content for tab 2</div>,
		},
	];
	return (
		<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
			<div className="flex flex-row items-center justify-between">
				<div className="mb-2 md:mb-0 md:mr-4">
					<h4 className="text-xl font-bold text-black mb-1">
						Good Morning, StellaMarrie{" "}
					</h4>
					<p className="text-black text-base font-normal">
						Take a look at your menu
					</p>
				</div>
				<div>
					<Button
						label="Add Product"
						onClick={() => router.push("add-menu")}
						rootClass="w-32 lg:w-[200px] h-10 md:h-[50px] bg-brown-500 text-white hover:text-white"
					/>
				</div>
			</div>
			<div className="mt-10 px-7 md:px-0">
				<Tabs tabs={tabs} />
			</div>
		</div>
	);
};

export default Menu;
