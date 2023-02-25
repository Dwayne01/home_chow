import { useEffect, useState } from "react";
import { UseFormMethods } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import { CardField, TextField } from "./InputField";

const CreditCardInput = ({
	form,
	getCardType,
}: {
	form: UseFormMethods<any>;
	getCardType: (type: string) => void;
}) => {
	const [showChild, setShowChild] = useState(false);

	useEffect(() => {
		setShowChild(true);
	}, []);

	if (!showChild) {
		return null;
	}

	return <CreditCardInputChild getCardType={getCardType} form={form} />;
};

const CreditCardInputChild = ({
	form,
	getCardType,
}: {
	form: UseFormMethods<any>;
	getCardType: (type: string) => void;
}) => {
	const { t } = useTranslation("accounts");
	const { register } = form;

	const {
		meta,
		getCardNumberProps,
		getExpiryDateProps,
		getCardImageProps,
		getCVCProps,
	} = usePaymentInputs();
	const { cardType } = meta;

	useEffect(() => {
		if (cardType) {
			getCardType(cardType.displayName.toUpperCase());
		}
	}, [cardType, getCardType]);

	const { erroredInputs } = meta;

	return (
		<div className="p-5 border rounded-lg border-sand">
			<h3>{t("creditCard")}</h3>
			<p className="py-3">{t("creditCardDesc")}</p>
			<div className="grid grid-flow-row-dense grid-rows-5 xl:grid-rows-2 grid-cols-1 xl:grid-cols-6 gap-5 xl:gap-4 bg-white">
				<TextField
					label={t("nameOnCard")}
					placeholder={t("nameOnCard")}
					required
					name="name"
					ref={register({
						required: {
							value: true,
							message: t("thisFieldIsRequired"),
						},
						minLength: {
							value: 1,
							message: t("thisFieldIsRequired"),
						},
					})}
					rootClass="xl:col-start-1 xl:col-end-4 xl:col-span-1 xl:row-start-1 xl:row-end-1"
				/>

				<CardField
					{...getCardNumberProps()}
					label={t("creditCardNumber")}
					placeholder="0000 1234 5678 9000"
					required
					error={erroredInputs && erroredInputs.cardNumber}
					rootClass="xl:col-span-1 xl:col-start-4 xl:col-end-7 xl:row-start-1 xl:row-end-1"
					cardImage={{ ...getCardImageProps({ images: images as any }) }}
				/>

				<CardField
					{...getExpiryDateProps()}
					rootClass="xl:col-span-2  xl:row-start-2 xl:row-end-2"
					label={t("expiryDate")}
					placeholder="MM / YY"
					required
					error={meta.touchedInputs.expiryDate && erroredInputs.expiryDate}
				/>

				<CardField
					{...getCVCProps()}
					label={t("CVC")}
					rootClass="xl:row-start-2 xl:row-end-2 xl:col-span-2"
					placeholder="123"
					required
					error={meta.touchedInputs.cvc && erroredInputs.cvc}
				/>

				<TextField
					rootClass="xl:row-start-2 xl:col-span-2 xl:mb-0"
					label={t("billingPostalCode")}
					placeholder={t("enterPostalCode")}
					name="billingPostalCode"
					required
					ref={register({
						required: {
							value: true,
							message: t("thisFieldIsRequired"),
						},
						pattern: {
							value: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
							message: t("invalidPostalCode"),
						},
					})}
				/>
			</div>
		</div>
	);
};

export default CreditCardInput;
