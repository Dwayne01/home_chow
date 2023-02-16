import React from "react";
import classNames from "classNames";
import LayoutComponent from "../../components/layout";

const ComingSoonPage = () => {
	const LeftComponent = () => (
		<div
			className={classNames(
				"w-full",
				"flex flex-col justify-between",
				"bg-slate-400"
			)}
		>
			<span className="text-center">left side</span>
			<div className="text-center">
				<span>footer</span>
			</div>
		</div>
	);

	const RightComponent = () => (
		<div
			className={classNames(
				"w-full bg-slate-600",
				"flex flex-col justify-between"
			)}
		>
			<span className="text-center">right side</span>
		</div>
	);

	return (
		<LayoutComponent className="">
			<LeftComponent />
			<RightComponent />
		</LayoutComponent>
	);
};

export default ComingSoonPage;
