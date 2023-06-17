import Image from "next/image";
import { FiEye } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { BiMenu } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

export function Navbar() {
	return (
		<nav className="h-[60px] bg-white shadow-md flex items-center z-10 top-0 left-0 mb-2">
			<div className="flex w-[95%] mt-[12px] ml-[20px] items-center justify-between flex-wrap z-auto gap-3">
				<div className="flex items-center gap-3">
					<BiMenu className="h-6 w-6 block sm:hidden" />
					<Image
						width={143}
						height={34}
						src="/assets/images/logo/HomeChow_Logo.png"
						className="hidden sm:block  left-5 top-3 absolute cursor-pointer"
						alt="logo"
					/>
					<Image
						width={31.43}
						height={32.85}
						src="/assets/images/logo/minilogo.png"
						className=" block sm:hidden  cursor-pointer "
						alt="logo"
					/>
				</div>

				<div className="flex flex-wrap gap-3 items-center justify-end top-3">
					<div className="flex items-center gap-1 ">
						<div className="hidden sm:block">Wallet Balance:</div>
						<div className="hidden sm:block">
							<button className="flex items-center justify-center bg-[#EAEAEA] p-2 gap-1 rounded-lg ">
								$12,567.00 <FiEye />
							</button>
						</div>
					</div>

					<div className="flex gap-3">
						<RiSearchLine className="h-6 w-6 block sm:hidden" />
						<GoMail className="h-6 w-6 hidden sm:block" color="#802200" />
						<FaRegBell className="h-6 w-6 hidden sm:block" color="#802200" />
					</div>

					<button className="flex items-center justify-between bg-[#802200] p-[6px] rounded-lg">
						<div className="flex gap-1 text-white">
							<Image
								width={26}
								height={26}
								src="/assets/images/stella.png"
								className="rounded-full -left-0.5"
								alt="stella"
							/>
							<span className="hidden sm:inline">Stella</span>
						</div>
						<MdOutlineKeyboardArrowDown color="#FFFFFF" />
					</button>
				</div>
			</div>
		</nav>
	);
}
