import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import classNames from "classnames";
import {
	CodeVerificationPayload,
	ResendCodePayload,
	Response,
} from "@/types/auth";
import CodeInput from "../form/CodeInput";
import WideIconButton from "../common/buttons/WideIconButton";
import Logo from "../../../public/assets/images/logo/HomeChow_Logo.png";
import Email from "../../../public/assets/icons/icon_email.png";
import Warning from "../../../public/assets/icons/icon_warning.png";
import CodeTimer from "../timer/CodeTimer";
import Button from "../common/buttons";

const VerificationForm = ({
	email,
	handleCodeVerification,
	firebaseUid,
	handleResendCode,
	isLoading,
}: {
	firebaseUid: string;
	email: string;
	isLoading: boolean;
	handleResendCode: (params: ResendCodePayload) => Promise<Response>;
	handleCodeVerification: (
		params: CodeVerificationPayload
	) => Promise<Response>;
}) => {
	const [errorMessage, setErrorMessage] = useState<string>("");
	const router = useRouter();

	const { t } = useTranslation("codeVerification");
	const [code, setCode] = useState<string>("");

	const [showTimer, setShowTimer] = useState<boolean>(false);

	const handleCodeSubmit = async () => {
		const res = await handleCodeVerification({
			code,
			firebase_uid: firebaseUid,
			purpose: "AUTHENTICATION",
		});

		if (res && res.message === "Your account has been verified successfully.") {
			router.push("/login");
		} else {
			setErrorMessage(res.message);
		}
	};

	const handleCodeResend = async () => {
		const res = await handleResendCode({ email });

		if (res && res.status_code === 200) {
			handleShowTimer();
		}
	};

	const handleShowTimer = async () => {
		setShowTimer(!showTimer);
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
					<div className="flex flex-col lg:flex-row gap-1 mt-3">
						<p className="text-font-light">
							{t("Please enter the 6 digit code sent to")}{" "}
						</p>
						<p className="text-primary-color font-semibold">{email}</p>
					</div>
				</div>
				<div className="my-10 justify-center">
					<CodeInput
						code={code}
						onUpdate={(codeData) => {
							setCode(codeData.trim());
						}}
						onSubmit={() => {}}
					/>
					<p className="py-4 text-red">{errorMessage}</p>
				</div>
				<div className="my-4 flex justify-center">
					<Button
						label={t("Confirm code")}
						type="submit"
						loading={isLoading}
						rootClass={classNames(
							"rounded-lg whitespace-nowrap w-full px-3 font-bold text-sm text-white"
						)}
						onClick={handleCodeSubmit}
						iconPosition="right"
					/>
				</div>
				<div className="mt-8 mb-4 flex justify-center">
					<p>{t("Didnt get the code")}?</p>
				</div>
				<div className="mb-4 flex flex-row items-center gap-3 justify-center">
					{!showTimer ? (
						<WideIconButton
							label={t("Resend Code") || ""}
							width="w-[125px]"
							height="h-[24px]"
							fontSize="text-[10pt]"
							borderRound="rounded-[48px]"
							rootClass={classNames(
								"text-black text-gray-50 bg-white border-[1px] border-border-color"
							)}
							onClick={handleCodeResend}
						/>
					) : (
						<>
							<Image
								src={Warning}
								width={40}
								className="icon-warning"
								alt="Icon_Warning"
							/>
							<div className="text-font-light flex gap-1">
								{t("Resend code in")}
								<CodeTimer handleShowTimer={handleShowTimer} duration={300} />
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default VerificationForm;
