import { ReactNode } from "react";

export interface SubscribeParams {
	email: string;
	firstName: string;
	lastName: string;
	userType: "driver" | "customer" | "vendor";
}

export interface ComingSoonLayoutProps {
	className?: string;
	LeftComponent?: ReactNode;
	RightComponent?: ReactNode;
}
