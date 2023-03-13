import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DashboardHeader from "@/components/header/DashboardHeader";
import SideNavigation from "@/components/SideNavigation";
import { RxDashboard } from "react-icons/rx";
import { RiSettings3Line } from "react-icons/ri";
import VendorDashboard from "@/components/VendorDashboard";

const nav = [
	{
		label: "Dashboard",
		href: "/dashboard",
		icon: RxDashboard,
		current: true,
	},
	{
		label: "Settings",
		href: "/settings",
		icon: RiSettings3Line,
		current: false,
	},
];

const DashboardPage = () => {
	const router = useRouter();
	const { pathname } = router;
	const [navigation, setNavigation] = useState(nav);

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
			MainComponent={<VendorDashboard />}
		/>
	);
};

export default DashboardPage;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"dashboard",
			])),
		},
	};
}
