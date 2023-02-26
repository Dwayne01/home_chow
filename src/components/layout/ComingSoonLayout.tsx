import React, { ReactElement } from "react";
import classNames from "classnames";
import ComingSoonHeader from "../header/ComingSoonHeader";

type ComingSoonLayoutProps = {
	className?: string;
	LeftComponent?: React.FC;
	RightComponent?: React.FC;
};

const ComingSoonLayout: React.FC<ComingSoonLayoutProps> = ({
	className,
	LeftComponent,
	RightComponent,
}): ReactElement => (
	<div className="w-full h-screen flex flex-col">
		{/* Header */}
		<ComingSoonHeader />
		{/* main container */}
		<div
			className={classNames(
				"w-full ",
				"h-full",
				"flex flex-col md:flex-row",
				className
			)}
		>
			<div className="flex flex-1 md:min-w-[800px]">
				{LeftComponent && <LeftComponent />}
			</div>
			<div className="hidden flex-1 md:flex">
				{RightComponent && <RightComponent />}
			</div>
		</div>
	</div>
);

export default ComingSoonLayout;
