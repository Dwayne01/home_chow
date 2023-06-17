import Image from "next/image";
import Link from "next/link";

export function Becomechef() {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center">
			<div className="md:w-1/2 p-5">
				<h2 className="text-2xl  text-dark-gray-300 font-bold  md:text-4xl">
					Become a chef and start sharing your culinary creation with hungry
					customers today!
				</h2>
				<Link
					href="/apply-to-be-vendor"
					className="hidden md:block w-[343px] text-center  bg-[#802200] hover:bg-opacity-80 hover:scale-105 hover:ease-in px-[38px] py-[14px] rounded-lg mt-10 text_font text-white"
				>
					Become a Chef
				</Link>
			</div>

			<Image
				width={250}
				height={268}
				src="/assets/images/Man_cooked_turkey_for_Thanksgiving.png"
				className="  md:w-[424px] md:h-[424px] "
				alt="stella"
			/>

			<Link
				href="/"
				className="w-[343px] md:hidden text-center bg-[#802200] hover:bg-opacity-80 hover:scale-105 hover:ease-in px-[38px] py-[14px] rounded-lg mt-5 md:mt-10 text_font text-white"
			>
				Become a Chef
			</Link>
		</div>
	);
}
