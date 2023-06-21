import Image from "next/image";
import HomeChowIcon from "public/assets/images/logo/HomeChow_Icon.svg";
import { useState, useEffect } from "react";
import Link from "next/link";
import expandMenuArrow from "public/assets/icons/expandMenuArrow.svg";
import user from "public/assets/icons/User.svg";
import Lable from "../common/Lable";

export interface ProfileDropdownItems {
	profilePicture: string;
	firstName: string;
	userType: string;
	email: string;
	walletBalance: number;
}

type Props = {
	items: ProfileDropdownItems[];
};

const ProfileDropdown = ({ items }: Props) => {
	const [expanded, setExpanded] = useState(false);
	const openProfileMenu = () => {
		setExpanded(!expanded);
	};
	const [showBalance, setShowBalance] = useState(true);
	const showBalanceFunc = () => {
		setShowBalance(!showBalance);
	};

	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth <= 768);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{items.map((item) => (
				<div key={item.firstName} className="flex flex-row-reverse">
					<button
						className="hidden md:block bg-primary-color md:w-[139px] md:h-[32px] md:rounded-lg z-50"
						onClick={() => setExpanded(!expanded)}
					>
						<div className="flex justify-between p-1">
							<div className="flex gap-1">
								<Image
									src={item.profilePicture}
									alt="homechow icon"
									width={26}
									height={24}
									className="rounded-full"
								/>
								<span>{item.firstName}</span>
							</div>
							<Image
								src={expandMenuArrow}
								alt="expand menu arrow"
								width={20}
								height={20}
							/>
						</div>
					</button>
					<button onClick={() => setExpanded(!expanded)} className="md:hidden">
						<Image src={user} alt="user icon" width={24} height={24} />
					</button>
					{isMobileView && expanded ? (
						<div className="fixed inset-0 flex items-center justify-center bg-white">
							<div className="bg-white p-4 h-full w-full shadow-lg">
								<h2 className="hidden md:block md:text-lg md:mb-[14px]">
									Profile
								</h2>
								<div className="flex justify-between pb-[67.5px] md:hidden">
									<Image
										src={HomeChowIcon}
										alt="homechow icon"
										width={32}
										height={33}
									/>
									<button onClick={openProfileMenu}>X</button>
								</div>
								<div className="flex flex-col dropdown-layout">
									<div className="flex gap-1">
										<Image
											src={item.profilePicture}
											alt="profile picture"
											width={73.67}
											height={68}
											className="bg-red rounded-full"
										/>
										<div>
											<p>{item.firstName}</p>
											<p>{item.userType}</p>
											<p>{item.email}</p>
										</div>
									</div>

									<button className="text-lg font-bold text-primary-color border border-primary-color bg-transparent px-[34px] py-[12px] mt-[14px] rounded-md">
										View as a Customer
									</button>
									<div className="pt-[60px] flex gap-2 items-center justify-center flex-wrap md:hidden">
										<p>Wallet Balance:</p>
										<Lable
											balance={12457}
											visible={showBalance}
											onClick={showBalanceFunc}
											className="bg-[#EAEAEA] min-w-[139px] min-h-[36px] rounded-md flex justify-evenly"
										/>{" "}
									</div>
									<h4 className="pt-[60px] text-sm text-[#802200] pb-[20px] md:text-lg md:pt-[40px]">
										More Options
									</h4>
									<ul className="dropdown-more-options">
										<div className="flex gap-3">
											<p className="border border-primary-color rounded-full w-[24px] h-[24px]" />
											<li>
												<Link href="/demo">Configuration</Link>
											</li>
										</div>
										<div className="flex gap-3">
											<p className="border border-primary-color rounded-full w-[24px] h-[24px]" />
											<li>
												<Link href="/demo">Privacy Rights</Link>
											</li>
										</div>
										<div className="flex gap-3">
											<p className="border border-primary-color rounded-full w-[24px] h-[24px]" />
											<li>
												<Link href="/demo">Get a Help</Link>
											</li>
										</div>
										<div className="flex gap-3">
											<p className="border border-primary-color rounded-full w-[24px] h-[24px]" />
											<li>
												<Link href="/demo">Terms of Service</Link>
											</li>
										</div>
										<div className="flex gap-3">
											<p className="border border-primary-color rounded-full w-[24px] h-[24px]" />
											<li>
												<Link href="/demo">Privacy and Policies</Link>
											</li>
										</div>
									</ul>
									<button className="flex justify-center mt-[63px] mb-[67px] md:pb-[36px]">
										<span className="border-b-2 border-black text-xl text-black font-semibold">
											Log out
										</span>
									</button>
								</div>
							</div>
						</div>
					) : (
						expanded && (
							<div className="sm:h-full md:w-[300px] md:h-[650px] shadow-lg p-4 absolute z-40 bg-white mt-[3.9rem]">
								<h2 className="hidden md:block md:text-lg md:mb-[14px]">
									Profile
								</h2>
								<div className="flex justify-between pb-[67.5px] md:hidden">
									<Image
										src={HomeChowIcon}
										alt="homechow icon"
										width={32}
										height={33}
									/>
									<button onClick={openProfileMenu}>X</button>
								</div>
								<div className="flex flex-col dropdown-layout">
									<div className="flex gap-1">
										<Image
											src={item.profilePicture}
											alt="profile picture"
											width={73.67}
											height={68}
											className="bg-red rounded-full"
										/>
										<div>
											<p>{item.firstName}</p>
											<p>{item.userType}</p>
											<p>{item.email}</p>
										</div>
									</div>

									<button className="text-lg font-bold text-primary-color border border-primary-color bg-transparent px-[34px] py-[12px] mt-[14px] rounded-md">
										View as a Customer
									</button>
									<div className="pt-[60px] flex gap-2 items-center justify-center flex-wrap md:hidden">
										<p>Wallet Balance:</p>
										<Lable
											balance={12457}
											visible={showBalance}
											onClick={showBalanceFunc}
											className="bg-[#EAEAEA] min-w-[139px] min-h-[36px] rounded-md flex justify-evenly"
										/>{" "}
									</div>
									<h4 className="pt-[60px] text-sm text-[#802200] pb-[20px] md:text-lg md:pt-[40px]">
										More Options
									</h4>
									<ul className="dropdown-more-options">
										<div className="flex gap-3">
											<p className="border border-primary-color rounded-full w-[24px] h-[24px]" />
											<li>
												<Link href="/demo">Configuration</Link>
											</li>
										</div>
										<div className="flex gap-3">
											<p className="border border-primary-color rounded-full w-[24px] h-[24px]" />
											<li>
												<Link href="/demo">Privacy Rights</Link>
											</li>
										</div>
										<div className="flex gap-3">
											<p className="border border-primary-color rounded-full w-[24px] h-[24px]" />
											<li>
												<Link href="/demo">Get a Help</Link>
											</li>
										</div>
										<div className="flex gap-3">
											<p className="border border-primary-color rounded-full w-[24px] h-[24px]" />
											<li>
												<Link href="/demo">Terms of Service</Link>
											</li>
										</div>
										<div className="flex gap-3">
											<p className="border border-primary-color rounded-full w-[24px] h-[24px]" />
											<li>
												<Link href="/demo">Privacy and Policies</Link>
											</li>
										</div>
									</ul>
									<button className="flex justify-center mt-[63px] mb-[67px] md:pb-[36px]">
										<span className="border-b-2 border-black text-xl text-black font-semibold">
											Log out
										</span>
									</button>
								</div>
							</div>
						)
					)}
				</div>
			))}
		</>
	);
};

export default ProfileDropdown;
