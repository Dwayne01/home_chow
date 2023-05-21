import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import { StoreLayoutProps } from "@/types/store";
import Footer from "@/components/footer/Footer";

const StoreLayout = ({
	TopComponent,
	LeftComponent,
	RightComponent,
	MainImage,
}: StoreLayoutProps) => (
	<div className="w-screen h-screen flex flex-col">
		<MainHeader />
		<div>
			<Image src={MainImage} className="w-full" alt="store-mainImage" />
		</div>
		<div className="flex justify-center py-4">{TopComponent}</div>
		<div>{LeftComponent}</div>
		<div>{RightComponent}</div>
		<Footer footerColor="light" />
	</div>
);

export default StoreLayout;
