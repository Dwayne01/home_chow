import React from "react";
import Image from "next/image";
import { useOrderContext } from "@/context/OrderContext";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaClock } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BiPlus } from "react-icons/bi";
import { getLastFourDigits, numberToCurrency } from "../../utils";
import imageCard from "../../../public/assets/images/card.png";
import WideIconButton from "../common/buttons/WideIconButton";

const PaymentStep = ({
	setIsOrderInfoFilled,
}: {
	setIsOrderInfoFilled: (value: boolean) => void;
}) => {
	const { order, payment, customerAddress } = useOrderContext();
	const { items, subtotal, deliveryFee, total, tax } = order;

	function handleBack() {
		setIsOrderInfoFilled(false);
	}

	return (
		<div className="flex flex-1 flex-col  items-center ">
			<div className="w-full">
				<button
					className="bg-white rounded-full p-2 flex justify-center items-center"
					onClick={handleBack}
				>
					<RiArrowGoBackLine />
				</button>
			</div>
			<div className="w-full mt-7">
				<h2 className="">Your Delivery</h2>
				<hr className="my-5" />
				<section className="flex flex-col gap-5 mt-6">
					<div className="flex gap-4 items-center">
						<FaClock className="text-primary-color h-5 w-5" />
						<span className="text-font-light">10:00 AM - 11:00 AM</span>
					</div>
					<div className="flex gap-4 items-center">
						<HiLocationMarker className="text-primary-color h-5 w-5" />
						<span className="text-font-light">
							{customerAddress?.address}, {customerAddress?.city},{" "}
							{customerAddress?.state} {customerAddress?.zip}
						</span>
					</div>
				</section>
				<hr className="my-5" />
				{items.map((item, index) => (
					<section key={index} className="flex mt-6 w-full justify-between">
						<div className="flex gap-x-7 items-center">
							<span className="font-medium">{item.quantity}</span>
							<span className="font-medium">{item.name}</span>
							<span>{numberToCurrency(item.price)}</span>
						</div>
						<span className="font-medium">
							{numberToCurrency(item.price * item.quantity)}
						</span>
					</section>
				))}
				<hr className="my-5" />
				<section className="w-full">
					<div className="flex justify-between items-center">
						<span className="text-">Sub Total</span>
						<span className="text-success">{numberToCurrency(subtotal)}</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="text-">Delivery Fee</span>
						<span className="text-success">
							{numberToCurrency(deliveryFee)}
						</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="text-">Tax Fee</span>
						<span className="text-success">{numberToCurrency(tax)}</span>
					</div>
				</section>
				<h2 className="mt-14">Payment Method</h2>
				<hr className="my-5" />
				<section className="flex flex-col gap-5 mt-6">
					<div className="flex justify-between items-center bg-white py-6 px-4 rounded-default border border-border-color shadow-md">
						<div className="flex items-center gap-2">
							<div>
								<Image src={imageCard} alt="card" width={48} height={48} />
							</div>
							<div className="flex gap-2 items-center font-medium text-base">
								<span>{getLastFourDigits(payment.cardNumber)}</span>
								<span>-</span>
								<span>{payment.certificateAuthority}</span>
							</div>
						</div>
						<button
							className="text-primary-color hover:bg-primary-color-50 px-4 py-2 hover:cursor-pointer font-medium"
							// eslint-disable-next-line no-alert
							onClick={() => alert("card switched")}
						>
							Switch
						</button>
					</div>

					<div className="m-auto mt-6">
						<button
							className="flex items-center gap-2 px-2 py-2 hover:shadow-md"
							// eslint-disable-next-line no-alert
							onClick={() => alert("add new card")}
						>
							<BiPlus className="text-primary-color h-5 w-5 border border-primary-color rounded-full" />
							<span className="text-base">Add new payment method</span>
						</button>
					</div>
				</section>
				<div className="w-full flex-1 flex items-end py-24">
					<WideIconButton
						label={`Pay ${numberToCurrency(total)}`}
						textColor="text-white"
						bgColor="bg-primary-color"
						rootClass="w-full font-bold shadow-none"
						onClick={() => {
							// eslint-disable-next-line no-alert
							alert("Payment Success");
						}}
					/>
				</div>
			</div>
		</div>
	);
};
export default PaymentStep;
