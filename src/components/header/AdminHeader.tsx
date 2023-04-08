import classNames from "classnames";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import LanguageSwitcher from "../langugeswitcher";
// import Logo from "../../assets/images/logo.png";
// import LanguageSwitcher from "./LanguageSwitcher";

const AdminHeader = ({
	handleToggle,
	showMenu,
}: {
	handleToggle: () => void;
	showMenu: boolean;
}) => (
	<nav className="min-h-[60px] h-[10vh] md:h-[7vh] bg-white border-gray-200 flex items-center z-12">
		<div className="flex w-full items-center justify-between flex-wrap z-auto px-5 gap-3">
			{/* <a href="/dashboard" className="flex items-center">
				<img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
			</a> */}
			<div className="flex items-center md:order-2">
				<div className="px-3">
					<LanguageSwitcher />
				</div>
				<button
					onClick={handleToggle}
					className={classNames(
						showMenu ? "rotate-180" : "-rotate-180",
						"sm:ml-6 md:hidden duration-100 ease-in-out"
					)}
				>
					{!showMenu ? (
						<HiOutlineMenuAlt3 className="w-7 h-7 text-gray-600" />
					) : (
						<IoMdClose className="text-2xl" />
					)}
				</button>
			</div>
		</div>
	</nav>
);

export default AdminHeader;
