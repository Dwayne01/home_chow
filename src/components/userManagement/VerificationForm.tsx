import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import classNames from "classnames";
import CodeInput from "../form/CodeInput";
import WideIconButton from "../common/buttons/WideIconButton";
import Logo from "../../../public/assets/images/logo/HomeChow_Logo.png";
import Email from "../../../public/assets/icons/icon_email.png";
import Warning from "../../../public/assets/icons/icon_warning.png";
import VerificationModal from "../modal/VerificationModal";
import Button from "../common/buttons";
import CodeTimer from "../timer/CodeTimer";

const VerificationForm = () => {
	const { t } = useTranslation("codeVerification");
	const [code, setCode] = useState<string>("");

	const [mockCode, setMockCode] = useState<any>(t("Check your mail"));
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [showTimer, setShowTimer] = useState<boolean>(false);

	const router = useRouter();

	const userEmail = "Draxier04123@gmail.com";

	const handleCodeSubmit = () => {
		if (code === mockCode) {
			setModalOpen(true);
		}
	};

	const handleMockCode = () => {
		const randomCode = Math.floor(Math.random() * 900000) + 100000;
		setMockCode(randomCode.toString());
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		router.push("/verification");
	};

	const handleShowTimer = () => {
		setShowTimer(true);
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
					<button onClick={handleMockCode}>
						<h2 className="font-semibold text-3xl">{mockCode}</h2>
					</button>
					<div className="flex flex-col lg:flex-row gap-1 mt-3">
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
					<p>{t("Didnt get the code")}?</p>
				</div>
				<div className="mb-4 flex flex-row items-center gap-3 justify-center">
					{!showTimer ? (
						<Button
							type="button"
							label={t("Resend Code") || ""}
							rootClass={classNames(
								"text-black text-gray-50 bg-white border-[1px] border-border-color rounded-[48px] text-[10pt] px-[12px] py-[4px]"
							)}
							onClick={handleShowTimer}
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
								<CodeTimer duration={300} />
							</div>
						</>
					)}
				</div>
				{modalOpen && (
					<VerificationModal onClose={handleCloseModal} isOpen>
						{t("Your code has been confirmed successfully")}
					</VerificationModal>
				)}
			</div>
		</div>
	);
};

export default VerificationForm;
