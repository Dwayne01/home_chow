import React, { ReactElement } from "react";
import { ComingSoonLayoutProps } from "@/types/comingsoon";
import classNames from "classnames";
// import ComingSoonHeader from "../header/ComingSoonHeader";
import MainHeader from "../header/MainHeader";

const ComingSoonLayout = ({
	className,
	LeftComponent,
	RightComponent,
}: ComingSoonLayoutProps): ReactElement => (
	<div className="w-full h-screen flex flex-col">
		{/* <ComingSoonHeader /> */}
		<MainHeader />
		<div
			className={classNames(
				"w-full ",
				"h-full",
				"flex flex-col md:flex-row",
				className
			)}
		>
			<div className="flex flex-1 md:min-w-[800px]">
				{LeftComponent && LeftComponent}
			</div>
			<div className="hidden flex-1 md:flex">
				{RightComponent && RightComponent}
			</div>
		</div>
	</div>
);

export default ComingSoonLayout;
