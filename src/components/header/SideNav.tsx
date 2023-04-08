import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineHistory, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsPinMapFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Key, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/images/logo/HomeChow_Logo.png";
// import { useLocation } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const checkPermission = (permissionNames: string[], scopes: string[]) => true;
const getSidebarItems = ({
	userPermissions,
}: {
	userPermissions: string[];
}) => {
	const items = [
		{
			route: "/dashboard",
			label: "home",
			Icon: IoHomeOutline,
			permission: null,
		},
		{
			route: "/settings/personal",
			label: "settings",
			Icon: IoSettingsOutline,
			permission: null,
		},
		{
			route: "/",
			label: "transactions",
			Icon: MdOutlineHistory,
			permission: null,
		},
		{
			route: "/",
			label: "find charge point",
			Icon: BsPinMapFill,
			permission: null,
		},
		{
			route: "/support",
			label: "support",
			Icon: BiSupport,
			permission: null,
		},
		{
			route: "/user-management",
			label: "users management",
			Icon: AiOutlineUser,
			permission: null,
			subMenuItems: [
				{
					route: "/site-owners",
					label: "site owners",
					permission: "ROLE_BACKOFFICE",
				},
				{
					route: "/organizations",
					label: "organizations",
					permission: "ROLE_CAN_VIEW_ORGANIZATION",
				},
				{
					route: "/users",
					label: "users",
					permission: "ROLE_CAN_VIEW_BACKOFFICE_USER",
				},
			],
		},
	];

	const permitedNavItems = items.filter((item) => {
		const isPermitted = item.permission
			? checkPermission(userPermissions || [], [item.permission])
			: true;

		if (isPermitted) {
			if (item.subMenuItems && item.subMenuItems?.length > 0) {
				const newSubMenu = item.subMenuItems.filter((subItem) => {
					const hasPermission = subItem.permission
						? checkPermission(userPermissions || [], [subItem.permission])
						: [];

					return hasPermission;
				});

				item.subMenuItems = newSubMenu;
			}
			return item;
		}
		return null;
	});

	return permitedNavItems;
};

const SideNav = ({ showMenu }: { showMenu?: boolean }) => {
	const [sidebarItems, setSidebarItems] = useState<any[]>([]);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [expand, setExpand] = useState<boolean>(false);

	// const location = useLocation();
	// const { user, logout } = useContext(AuthContext);
	const { t } = useTranslation(["navigation"]);

	// const { firstName, lastName, email } = user || {};

	const [menu, setMenu] = useState<number | null>(null);

	// useEffect(() => {
	// 	const activeMenuItem = sidebarItems.reduce((acc, item) => {
	// 		let newAcc = acc;
	// 		const activeMenu =
	// 			item.subMenuItems &&
	// 			item.subMenuItems.find(
	// 				(submenu) => submenu.route === location.pathname
	// 			);

	// 		if (activeMenu) newAcc = item;

	// 		return newAcc;
	// 	}, {} as any);

	// 	const index = sidebarItems.findIndex(
	// 		(item) => item.label === activeMenuItem.label
	// 	);

	// 	setMenu(index);
	// }, [sidebarItems]);

	useEffect(() => {
		// if (user) {
		const res = getSidebarItems({ userPermissions: [] });

		setSidebarItems(res);
		// }
	}, []);

	const setMenuValue = (props: number) => {
		if (menu === props) {
			setMenu(null);
			return;
		}
		setMenu(props);
	};

	return (
		<div
			id="Main"
			className={classNames(
				showMenu && "absolute z-10 h-full",
				expand
					? "md:w-2 duration-100 ease-in-out"
					: "md:w-[22rem] duration-100 ease-in-out",
				!showMenu
					? "w-0 duration-100 ease-in-out"
					: "w-full duration-100 ease-in-out",
				"flex flex-col justify-between items-start bg-primary-color md:relative"
			)}
		>
			<div className="px-8 py-6">
				<Link href="/">
					<Image src={"" || Logo} className="w-40 md:w-55" alt="logo" />
				</Link>
			</div>
			{!expand && (
				<div className="w-full h-screen">
					{sidebarItems.map((item, ind) => (
						<div
							key={ind}
							className={classNames(
								"flex flex-col hover:bg-primary-color"
								// location.pathname.split("/")[1] === item.route.split("/")[1] &&
								// 	item.route !== "/" &&
								// 	!item.subMenuItems &&
								// 	"bg-primary-color"
							)}
						>
							{!expand && (
								<div
									tabIndex={0}
									role="button"
									onKeyDown={() => {}}
									onClick={() => {
										setMenuValue(ind);

										if (!item.subMenuItems) {
											window.location.replace(item.route);
										}
									}}
									className="flex justify-between items-center text-white px-4 py-5 "
								>
									<div className="focus:outline-none text-white flex items-center space-x-5">
										<item.Icon className="text-xl" />
										<p className="text-sm capitalize m-0 text-left">
											{t(item.label)}
										</p>
									</div>
									{item.subMenuItems && item.subMenuItems?.length > 0 && (
										<MdOutlineKeyboardArrowDown
											className={classNames(
												"transform duration-100 text-xl",
												menu !== ind ? "" : "rotate-180"
											)}
										/>
									)}
								</div>
							)}
							<div
								className={classNames(
									menu === ind ? "max-h-96" : "max-h-0",
									"overflow-hidden transition-all ease-in-out duration-300"
								)}
							>
								{item.subMenuItems &&
									item.subMenuItems.map(
										(
											subItems: { route: string | URL; label: any },
											index: Key | null | undefined
										) => (
											<div
												key={index}
												id="menu1"
												className={
													classNames("bg-white")
													// location.pathname === subItems.route
													// 	? "bg-primary-color"
													// 	: "bg-gray-800"
												}
											>
												<button
													onClick={() => {
														if (item.route) {
															window.location.replace(subItems.route);
														}
													}}
													className="flex justify-start items-center text-black hover:primary-color-light px-4 py-5  w-full"
												>
													<p
														className={classNames(
															menu === ind ? "opacity-100" : "opacity-0",
															"text-sm capitalize m-0 text-left ml-10 transition-all ease-in-out duration-300"
														)}
													>
														{t(subItems.label)}
													</p>
												</button>
											</div>
										)
									)}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SideNav;
