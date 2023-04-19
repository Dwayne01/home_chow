import React from "react";
import classNames from "classnames";

const Popup = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<div
		className={classNames(
			"w-full lg:w-[577px] flex bg-white lg:h-[90vh] rounded-lg p-6   overflow-y-auto scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-rounded-md scrollbar-thumb-rounded-md",
			className
		)}
	>
		{children}
	</div>
);

export default Popup;
