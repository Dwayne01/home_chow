import React from "react";
import Map from "@/components/checkout/Map";
import "mapbox-gl/dist/mapbox-gl.css";
import CheckoutPopup from "@/components/checkout/Popup";
import GetOrderInfo from "@/components/checkout/GetOrderInfo";
import PaymentStep from "@/components/checkout/PaymentStep";
import { OrderProvider } from "@/context/OrderContext";

const Checkout = () => {
	const user = "customer";
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
				<Map {...{ user, className: "h-full hidden lg:block" }} />
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
