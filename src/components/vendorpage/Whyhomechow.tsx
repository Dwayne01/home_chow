import Image from "next/image";

export function Whyhomechow() {
	return (
		<div className="bg-gray-200 p-5">
			<div className="md:w-2/3 m-auto   items-center justify-center gap-14  md:flex">
				<div className="flex-col items-center md:w-[480px] md:h-[160px]">
					<h1 className="font-bold text-3xl text-secondary-color mb-5 md:text-5xl">
						Why <span className="text-[#802200]"> HomeChow?</span>
					</h1>

					<h2 className="font-normal text-base text-[#3c3c3c] ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis non
						ornare a faucibus morbi morbi. Posuere vitae neque volutpat mauris.
						Auctor pharetra montes aliquet.
					</h2>
				</div>

				<Image
					width={340}
					height={260}
					src="/assets/images/youtube.png"
					alt="youtube"
					className="mt-5 md:mt-0"
				/>
			</div>
		</div>
	);
}
