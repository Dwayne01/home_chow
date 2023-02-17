import { ReactNode, Children } from "react";
import classNames from "classnames";

const LayoutComponent = ({
	children,
	className,
}: {
	children: ReactNode;
	className: string;
}) => {
	const childArray = Children.toArray(children);
	const [LeftComponent, RightComponent] = childArray;

	return (
		<div className={classNames("w-full h-screen flex flex-col")}>
			{/* Header */}
			<div
				className={classNames(
					"w-full flex md:hidden justify-between items-center"
				)}
			>
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
				<div className="flex flex-1">{LeftComponent}</div>
				<div className="hidden flex-1 md:flex">{RightComponent}</div>
			</div>
		</div>
	);
};
export default LayoutComponent;
