import MainHeader from "@/components/header/MainHeader";
import { StoreLayoutProps } from "@/types/store";
import Footer from "@/components/footer/Footer";

const StoreLayout = ({
	TopComponent,
	LeftComponent,
	RightComponent,
}: // MainImage,
StoreLayoutProps) => (
	<div className="w-screen h-screen flex flex-col">
		<MainHeader />
		{/* {MainImage} */}
		<div>{TopComponent}</div>
		{LeftComponent}
		{RightComponent}
		<Footer footerColor="light" />
	</div>
);

export default StoreLayout;
