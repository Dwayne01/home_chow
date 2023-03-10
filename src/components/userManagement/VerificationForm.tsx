import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import CodeInput from "../form/CodeInput";
import WideIconButton from "../common/buttons/WideIconButton";
import Logo from "../../../public/assets/images/logo/HomeChow_Logo.png";
import Email from "../../../public/assets/images/icon/icon_email.png";
import Warning from "../../../public/assets/images/icon/icon_warning.png";

const VerificationForm = () => {
	const { t } = useTranslation("codeVerification");
	const [code, setCode] = React.useState("");

	const userEmail = "Draxier04123@gmail.com";
	const remainTime = "02:34";

	const handleCodeSubmit = () => {
		// Need logic for verifying the user's code
		// eslint-disable-next-line no-console
		console.log(code);
	};

	return (
		<div className="flex-1 my-16 flex flex-col">
			<div className="mx-auto w-[360px] md:w-auto">
				<div className="logo flex justify-center">
					<Image src={Logo} className="w-48 md:w-60" alt="Logo" />
				</div>
				<div className="flex justify-center my-10">
					<Image src={Email} className="icon-email" alt="Icon_Email" />
				</div>
				<div className="flex flex-col text-center mt-10">
					<h2 className="font-semibold text-3xl">{t("Check your mail")}</h2>
					<div className="flex flex-col md:flex-row gap-1 mt-3">
						<p className="text-font-light">
							{t("Please enter the 6 digit code sent to")}{" "}
						</p>
						<p className="text-primary-color font-semibold">{userEmail}</p>
					</div>
				</div>
				<div className="my-10 flex justify-center">
					<CodeInput
						code={code}
						onUpdate={(data) => {
							setCode(data.trim());
						}}
						onSubmit={() => {}}
					/>
				</div>
				<div className="my-4 flex justify-center">
					<WideIconButton
						label={t("Confirm code")}
						textColor="text-white"
						bgColor="bg-primary-color"
						onClick={handleCodeSubmit}
					/>
				</div>
				<div className="mt-8 mb-4 flex justify-center">
					<p>{t("Didnt you get the code")}?</p>
				</div>
				<div className="mb-4 flex flex-row items-center gap-3 justify-center">
					<Image
						src={Warning}
						width={40}
						className="icon-warning"
						alt="Icon_Warning"
					/>
					<div className="text-font-light">
						{t("Resend code in")} {remainTime}
					</div>
				</div>
			</div>
		</div>
	);
};

export default VerificationForm;
