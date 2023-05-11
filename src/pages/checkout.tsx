import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import CheckoutPopup from "@/components/checkout/Popup";
import GetOrderInfo from "@/components/checkout/GetOrderInfo";
import PaymentStep from "@/components/checkout/PaymentStep";
import { OrderProvider } from "@/context/OrderContext";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import map from "../../public/assets/images/Maps.png";

const Checkout = () => {
	const ItemsSummary = [
		{
			name: "Honey",
			quantity: 5,
			price: 10,
		},
		{
			name: "Chicken",
			quantity: 2,
			price: 14,
		},
	];

	const [isOrderInfoFilled, setIsOrderInfoFilled] = React.useState(false);
	return (
		<OrderProvider {...{ ItemsSummary }}>
			<div className="relative h-screen  flex flex-col">
				<div className="flex-1 h-screen overflow-hidden">
					<Image src={map} alt="map" />
				</div>
				<div className="lg:absolute lg:top-[50%] lg:left-7 lg:-translate-y-[50%] rounded-t-[20px]">
					<CheckoutPopup>
						{isOrderInfoFilled ? (
							<PaymentStep {...{ setIsOrderInfoFilled }} />
						) : (
							<GetOrderInfo {...{ setIsOrderInfoFilled }} />
						)}
					</CheckoutPopup>
				</div>
			</div>
		</OrderProvider>
	);
};

export default Checkout;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["checkout"])),
		},
	};
}
