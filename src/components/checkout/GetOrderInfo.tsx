import React from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { TextField } from "@/components/form/InputField";
import { FormProvider, useForm } from "react-hook-form";
import WideIconButton from "@/components/common/buttons/WideIconButton";
import { useOrderContext } from "@/context/OrderContext";

const GetOrderInfo = ({
	setIsOrderInfoFilled,
}: {
	setIsOrderInfoFilled: (value: boolean) => void;
}) => {
	const { customerAddress, payment } = useOrderContext();

	const orderForm = useForm({
		defaultValues: {
			address: customerAddress.address ? customerAddress.address : "",
			city: customerAddress.city ? customerAddress.city : "",
			state: customerAddress.state ? customerAddress.state : "",
			zip: customerAddress.zip ? customerAddress.zip : "",
			cardNumber: payment.cardNumber ? payment.cardNumber : "",
			cardName: payment.cardName ? payment.cardName : "",
			expiryDate: payment.expiryDate ? payment.expiryDate : "",
			cvv: payment.cvv ? payment.cvv : "",
		},

		mode: "onBlur",
	});

	const { handleSubmit, register } = orderForm;

	function handleNext() {
		handleSubmit((data) => {
			setIsOrderInfoFilled(true);
			// eslint-disable-next-line no-console
			console.log(data);
		})();
	}

	return (
		<div className="flex flex-1 flex-col justify-between items-center">
			<div className="w-full">
				<button className="bg-white rounded-full p-2 flex justify-center items-center">
					<RiArrowGoBackLine />
				</button>
			</div>
			<div className="w-full mt-7">
				<h2 className="">Delivery Information</h2>
				<hr className=" my-5" />
				<div className="">
					<FormProvider {...orderForm}>
						<form className="flex flex-col gap-8">
							<TextField
								data-testid="address"
								rootClass="mb-2"
								inputClass="px-[14px] py-[10px] rounded-lg"
								name="address"
								label="Address"
								placeholder="Address"
								required
								ref={register({
									required: true,
								})}
								autoComplete="username"
							/>
							<div className="flex justify-between items-center gap-10">
								<TextField
									data-testid="city"
									rootClass="mb-2 rounded-lg"
									inputClass="px-[14px] py-[10px] rounded-lg"
									name="city"
									label="City"
									placeholder="City"
									required
									ref={register({
										required: true,
										pattern: {
											value: /^[A-Za-z]+$/i,
											message: "inavlid City code",
										},
									})}
									autoComplete="username"
								/>
								<TextField
									data-testid="state"
									rootClass="mb-2 rounded-lg"
									inputClass="px-[14px] py-[10px] rounded-lg"
									name="state"
									label="State"
									placeholder="State"
									required
									ref={register({
										required: true,
										pattern: {
											value: /^[A-Z]{2}$/,
											message: "inavlid state code",
										},
									})}
									autoComplete="username"
								/>
								<TextField
									data-testid="zip"
									rootClass="mb-2 rounded-lg"
									inputClass="px-[14px] py-[10px] rounded-lg"
									name="zip"
									label="Zip"
									placeholder="Zip"
									required
									ref={register({
										required: true,
										pattern: {
											value: /^[A-Z\d][A-Z\d\s]*$/i,
											message: "common:inavlid zip code",
										},
									})}
									autoComplete="username"
								/>
							</div>
						</form>
					</FormProvider>
				</div>
			</div>
			<div className="w-full mt-8">
				<h2 className="">Payment Method</h2>
				<hr className=" my-5" />
				<div className="">
					<FormProvider {...orderForm}>
						<form className="flex flex-col gap-8">
							<TextField
								data-testid="cardNumber"
								rootClass="mb-2 rounded-lg"
								name="cardNumber"
								inputClass="px-[14px] py-[10px] rounded-lg"
								label="Card Number"
								placeholder="0000 0000 0000 0000"
								required
								ref={register({
									required: true,
									pattern: {
										value: /^[0-9]{16}$/,
										message: "common:inavlid card number",
									},
								})}
								autoComplete="username"
								maxLength={16}
							/>
							<TextField
								data-testid="cardName"
								rootClass="mb-2 rounded-lg"
								inputClass="px-[14px] py-[10px] rounded-lg"
								name="cardName"
								label="Card Name"
								placeholder="Card Name"
								required
								ref={register({
									required: true,
									pattern: {
										value: /^[a-zA-Z ]{2,30}$/,
										message: "common:inavlid card name",
									},
								})}
								autoComplete="username"
							/>
							<div className="flex justify-between items-center gap-5">
								<TextField
									data-testid="expiryDate"
									rootClass="mb-2 rounded-lg"
									inputClass="px-[14px] py-[10px] rounded-lg"
									name="expiryDate"
									label="Expiry Date"
									placeholder="MMYY"
									required
									ref={register({
										required: true,
										pattern: {
											value: /^[0-9]{4}$/,
											message: "common:inavlid expiry date",
										},
									})}
									autoComplete="username"
									maxLength={4}
								/>
								<TextField
									data-testid="cvv"
									rootClass="mb-2 rounded-lg"
									inputClass="px-[14px] py-[10px] rounded-lg"
									name="cvv"
									label="CVV"
									placeholder="***"
									required
									ref={register({
										required: true,
										pattern: {
											value: /^[0-9]{3}$/,
											message: "common:inavlid cvv",
										},
									})}
									autoComplete="username"
									maxLength={3}
								/>
							</div>
						</form>
					</FormProvider>
				</div>
			</div>
			<div className="w-full flex-1 flex items-end py-24">
				<WideIconButton
					label="Next"
					textColor="text-white"
					bgColor="bg-primary-color"
					rootClass="w-full font-bold shadow-none"
					onClick={() => handleNext()}
				/>
			</div>
		</div>
	);
};

export default GetOrderInfo;
