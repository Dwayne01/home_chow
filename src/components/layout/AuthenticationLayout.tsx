import React, { ReactElement } from "react";
import { ComingSoonLayoutProps } from "@/types/comingsoon";
import classNames from "classnames";
import { useRouter } from "next/router";
import ComingSoonHeader from "../header/ComingSoonHeader";

const AuthenticationLayout = ({
	className,
	LeftComponent,
	RightComponent,
	width = "md:min-w-[800px]",
}: ComingSoonLayoutProps): ReactElement => {
	const route = useRouter();
	return (
		<div className="w-full h-screen flex flex-col">
			<div className="mt-2 mb-5">
				{route.pathname === "/comingsoon" && <ComingSoonHeader />}
			</div>
			<div
				className={classNames(
					"w-full",
					"h-full",
					"flex flex-col md:flex-row",
					className
				)}
			>
				<div className={classNames("flex-1 w-full", width)}>
					{LeftComponent && LeftComponent}
				</div>
				<div className="hidden flex-1 w-full md:flex">
					{RightComponent && RightComponent}
				</div>
			</div>
		</div>
	);
};
export default AuthenticationLayout;
