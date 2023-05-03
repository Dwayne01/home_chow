import { ReactNode } from "react";
import { ChartType } from "chart.js/auto";

export interface DashboardLayoutProps {
	HeaderComponent: ReactNode;
	LeftMenuComponent: ReactNode;
	MainComponent: ReactNode;
}

export interface AccountButtonProps {
	profileCompletion?: number;
	notificationCount?: number;
	notificationColor?: string;
	onClick?: () => void;
}

export interface LableProps {
	balance?: number;
	visible?: boolean;
	label?: string;
	onClick?: () => void;
	className?: string;
}

export interface SearchFieldProps {
	className?: string;
	width?: string;
	placeholder: string;
	onChange?: (value: string) => void;
}

export interface CircularProgressBarProps {
	children?: ReactNode;
	progressStart?: number;
	progressEnd?: number;
	speed?: number;
	barColor?: string;
	className?: string;
}

export interface SideNavigationProps {
	logoUrl?: string;
	navigation: { label: string; href: string; icon: any; current: boolean }[];
}

export interface StatisticsListProps {
	statistics: {
		Icon: ReactNode;
		count: number;
		label: string;
	}[];
}

export interface StatisticsCardProps {
	Icon: ReactNode;
	count: number;
	label: string;
}

export interface ChartsProps {
	type?: ChartType;
	chartData: {
		label: string;
		count: number;
		color: string;
	}[];
	size?: number;
}

export interface RestaurantsCardProps {
	imageUrl: string;
	name: string;
	address: string;
	deliveryTime: number | string;
	deliveryFee: number;
	rating: number;
	width?: number | string;
}

export interface RestaurantsCardListProps {
	title: string;
	restaurants: {
		imageUrl: string;
		name: string;
		address: string;
		deliveryTime: number | string;
		deliveryFee: number;
		rating: number;
		width?: number | string;
	}[];
	itemsPerPage: number;
}
