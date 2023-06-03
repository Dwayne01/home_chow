import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import { StoreLayoutProps } from "@/types/store";
import Footer from "@/components/footer/Footer";

const ChefSingleLayout = ({
	TopComponent,
	TabComponent,
	LeftComponent,
	RightComponent,
	MainImage,
}: StoreLayoutProps) => (
	<div className="h-screen flex flex-col mx-20">
		<MainHeader />
		<div>
			<Image src={MainImage} className="w-full" alt="store-mainImage" />
		</div>
		<div className="flex justify-center py-4 my-8">{TopComponent}</div>
		<div className="flex justify-center gap-16">
			<div className="w-7/12">
				<div>{TabComponent}</div>
				<div>{LeftComponent}</div>
			</div>
			<div className="w-3/12">{RightComponent}</div>
		</div>
		<Footer footerColor="light" />
	</div>
);

export default ChefSingleLayout;
