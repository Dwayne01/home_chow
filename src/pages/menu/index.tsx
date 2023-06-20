import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DashboardHeader from "@/components/header/DashboardHeader";
import SideNavigation from "@/components/SideNavigation";
import { RxDashboard } from "react-icons/rx";
import { RiSettings3Line } from "react-icons/ri";
import Menu from "@/components/menu/menu";
import { GiKnifeFork } from "react-icons/gi";
import { useProduct } from "@/hooks/useProduct";
// import { AddProductPayload } from "@/types/product";

const nav = [
	{
		label: "Dashboard",
		href: "/dashboard",
		icon: RxDashboard,
		current: true,
	},
	{
		label: "Menu",
		href: "/menu",
		icon: GiKnifeFork,
		current: false,
	},

	{
		label: "Settings",
		href: "/settings",
		icon: RiSettings3Line,
		current: false,
	},
];

const MenuPage = () => {
	const router = useRouter();
	const { pathname } = router;
	const [navigation, setNavigation] = useState(nav);
	const { mutateAsync, isLoading } = useProduct();

	const handleAddProduct = async (params: any) => {
		const response = await mutateAsync(params);
		return response;
	};

	useEffect(() => {
		const newNav = navigation.map((item) => {
			if (item.href === pathname) {
				return { ...item, current: true };
			}
			return { ...item, current: false };
		});
		setNavigation(newNav);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<DashboardLayout
			HeaderComponent={<DashboardHeader />}
			LeftMenuComponent={<SideNavigation {...{ navigation }} />}
			MainComponent={
				<Menu handleAddProduct={handleAddProduct} isLoading={isLoading} />
			}
		/>
	);
};

export default MenuPage;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"dashboard",
				"settings",
			])),
		},
	};
}
