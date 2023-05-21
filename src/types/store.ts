import { ReactNode } from "react";

export interface StoreLayoutProps {
	TopComponent: ReactNode;
	TabComponent: ReactNode;
	LeftComponent: ReactNode;
	RightComponent: ReactNode;
	MainImage: any;
}

export type Product = {
	id: number;
	name: string;
	price: number;
};
