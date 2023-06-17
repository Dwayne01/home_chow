import Image from "next/image";

export function Infocolumn() {
	return (
		<section className="m-auto md:w-2/3 md:mt-20">
			<div className="items-center justify-between md:flex">
				<Image
					width={237}
					height={181}
					src="/assets/images/Man_studying_financial_analytics.png"
					className="m-auto md:w-[500px] md:h-[402px]"
					alt="stella"
				/>

				<div className="flex-col gap-[18px] md:w-[480px] md:h-[136px] p-5">
					<h1 className="font-bold text-3xl text-secondary-color flex mb-4  md:text-4xl">
						Dashboard
					</h1>

					<h2 className="font-normal text-base text-dark-gray-300 ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis non
						ornare a faucibus morbi morbi. Posuere vitae neque volutpat mauris.
						Auctor pharetra montes aliquet.
					</h2>
				</div>
			</div>

			<div className=" items-center  justify-between gap-4 md:flex">
				<Image
					width={242}
					height={185}
					src="/assets/images/Signup.png"
					className="md:hidden m-auto md:w-[456px] md:h-[456px]"
					alt="signup"
				/>
				<div className="flex-col gap-[18px] md:w-[480px]  md:h-[136px] p-5">
					<h1 className="font-bold text-3xl text-secondary-color flex mb-4  md:text-4xl">
						Menu
					</h1>

					<h2 className="font-normal text-base text-dark-gray-300 ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis non
						ornare a faucibus morbi morbi. Posuere vitae neque volutpat mauris.
						Auctor pharetra montes aliquet.
					</h2>
				</div>

				<Image
					width={242}
					height={185}
					src="/assets/images/Signup.png"
					className="hidden md:block m-auto md:w-[456px] md:h-[456px]"
					alt="signup"
				/>
			</div>

			<div className=" items-center justify-between gap-14 md:flex">
				<span>
					<Image
						width={242}
						height={185}
						src="/assets/images/Order_complete.png"
						className="m-auto md:w-[456px] md:h-[456px]"
						alt="order"
					/>
				</span>

				<div className="flex-col md:w-[480px] md:h-[136px] p-5">
					<h1 className="font-bold text-3xl text-secondary-color flex mb-4 md:text-4xl">
						Order
					</h1>

					<h2 className="font-normal text-base text-dark-gray-300 ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis non
						ornare a faucibus morbi morbi. Posuere vitae neque volutpat mauris.
						Auctor pharetra montes aliquet.
					</h2>
				</div>
			</div>
		</section>
	);
}
