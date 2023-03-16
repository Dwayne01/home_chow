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
			{route.pathname === "/comingsoon" && <ComingSoonHeader />}
			<div
				className={classNames(
					"w-full ",
					"h-full",
					"flex flex-col md:flex-row",
					className
				)}
			>
				<div className={classNames("hidden md:flex flex-1", width)}>
					{LeftComponent && LeftComponent}
				</div>
				<div className=" flex-1 w-full flex">
					{RightComponent && RightComponent}
				</div>
			</div>
		</div>
	);
};
export default AuthenticationLayout;
