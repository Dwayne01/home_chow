import { ReactNode } from "react";
import WideIconButton from "@/components/common/buttons/WideIconButton";

const VerificationModal = ({
	isOpen,
	onClose,
	children,
}: {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}) => {
	if (!isOpen) return null;

	return (
		<div className="fixed z-10 inset-0 overflow-y-auto">
			<div className="flex justify-center items-center min-h-screen">
				<div className="absolute inset-0 bg-gray-500 opacity-75" />
				<div className="inline-block p-10 gap-5 overflow-hidden text-center transition-all transform bg-white rounded-[24px] shadow-xl z-50">
					<p className="mb-10">{children}</p>
					<WideIconButton
						label="Continue"
						textColor="text-white"
						bgColor="bg-primary-color"
						onClick={onClose}
					/>
				</div>
			</div>
		</div>
	);
};

export default VerificationModal;
