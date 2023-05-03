import MainHeader from "@/components/header/MainHeader";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import ApplyVendor from "@/components/form/ApplyVendor";
import { useApplyVendor } from "@/hooks/useApplyVendor";

function ApplyAsVendor() {
	const { mutateAsync, isLoading } = useApplyVendor();

	const handleVendor = async (params: any) => {
		await mutateAsync(params);

		return true;
	};

	return (
		<div>
			<MainHeader />
			<div className="flex justify-around mt-[100px]">
				<div className="w-[55%] flex items-center justify-center">
					<h1 className="text-[70px]">
						Start your own business! Set your own{" "}
						<span className="text-primary text-primary-color">rules</span>
					</h1>
				</div>
				<div>
					<Image
						src="/assets/images/applyVendor.png"
						alt="Apply as Vendor"
						width={400}
						height={400}
					/>
				</div>
			</div>

			<div className="p-[100px] w-[55%] mb-[200px]">
				<h2 className="py-5">Apply as Vendor</h2>
				<p className="py-5">Please fill in your personal details</p>
				<ApplyVendor handleVendor={handleVendor} isLoading={isLoading} />
			</div>

			<Footer footerColor="light" />
		</div>
	);
}

export default ApplyAsVendor;
