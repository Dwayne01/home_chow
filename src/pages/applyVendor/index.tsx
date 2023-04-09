import MainHeader from "@/components/header/MainHeader";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import ApplyVendor from "@/components/form/ApplyVendor";

function ApplyAsVendor() {
	const handleVendor = (params: any) => {
		// await mutateAsync(params);
		// eslint-disable-next-line no-console
		console.log(params);
	};

	return (
		<div>
			<MainHeader />
			<div className="flex justify-around mt-[100px]">
				<div className="w-[30%] flex items-center justify-center">
					<h1>
						Start your own business! Set your own{" "}
						<span className="text-primary">rules</span>
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
				<ApplyVendor handleVendor={handleVendor} />
			</div>

			<Footer footerColor="light" />
		</div>
	);
}

export default ApplyAsVendor;
