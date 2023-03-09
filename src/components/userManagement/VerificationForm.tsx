import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import CodeInput from "../form/CodeInput";
import WideIconButton from "../common/buttons/WideIconButton";
import Logo from "../../../public/assets/images/logo/HomeChow_Logo.png";
import Email from "../../../public/assets/images/icon/icon_email.png";

const VerificationForm = () => {
	const { t } = useTranslation("codeVerification");
	const [code, setCode] = React.useState("");

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<div className="flex-1 my-16 flex flex-col">
			<div className="mx-auto w-[480px]">
				<div className="logo flex justify-center">
					<Image src={Logo} className="w-48 md:w-60" alt="Logo" />
				</div>
				<div className="flex justify-center my-10">
					<Image src={Email} className="w-[156px] h-[161px]" alt="Icon_Email" />
				</div>
				<div className="flex flex-col text-center mt-12">
					<h2 className="font-semibold text-3xl">{t("Check your mail")}</h2>
					<p className="mt-3">{t("Please enter the 6 digit code sent to")}</p>
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
				<div className="my-10 flex justify-center">
					<WideIconButton
						label={t("Confirm code")}
						textColor="text-white"
						bgColor="bg-primary-color"
						onClick={() => {
							handleSubmit();
						}}
					/>
				</div>
				<div className="my-10 flex flex-row gap-3">
					<div>icon</div>
					<div>{t("Resend code in")}</div>
				</div>
			</div>
		</div>
	);
};

export default VerificationForm;
