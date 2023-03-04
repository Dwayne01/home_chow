import { ReactNode } from "react";

export interface SubscribeParams {
	email: string;
	firstName: string;
	lastName: string;
	userType: string;
}

export interface ComingSoonLayoutProps {
	className?: string;
	LeftComponent?: ReactNode;
	RightComponent?: ReactNode;
}
