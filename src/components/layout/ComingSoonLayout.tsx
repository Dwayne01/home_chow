import React, { ReactElement } from "react";
// eslint-disable-next-line import/no-unresolved
import classNames from "classnames";

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
		<div className="w-full flex md:hidden justify-between items-center">
			<div>Logo PlaceHolder</div>
			<div>hamburger menu</div>
		</div>
		{/* main container */}
		<div
			className={classNames(
				"w-full ",
				"h-full",
				"flex flex-col md:flex-row",
				className
			)}
		>
			<div className="flex flex-1">{LeftComponent && <LeftComponent />}</div>
			<div className="hidden flex-1 md:flex">
				{RightComponent && <RightComponent />}
			</div>
		</div>
	</div>
);

export default ComingSoonLayout;
