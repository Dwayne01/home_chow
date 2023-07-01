export interface ProductResponse {
	status_code: number;
	status: string;
	message: string;
	body: Product[];
}

export interface AddProductPayload {
	image: string;
	product_name: string;
	listing_category: string;
	diet_info: {
		ingredients: string[];
		nutritional_info: string;
		dietary_restrictions: string[];
	};
	prices: { size: string; price: string }[];
	description: string;
	stock_availability: boolean;
}

export type SearchProductPayload = {
	documents: any[];
	// eslint-disable-next-line @typescript-eslint/ban-types
	query: {};
	sort: {
		created_at: -1;
	};
	limit: number;
	skip: number;
	update: string;
};

export interface Product {
	add_ons: any[];
	created_at: string;
	custom_options: any[];
	description: string;
	diet_info: {
		ingredients: string[];
		nutritional_info: {
			info: string;
		};
	};
	dietary_restrictions: string[];
	ingredients: string[];
	nutritional_info: {
		info: string;
	};
	images: string[];
	listing_category: string;
	prices: {
		size: string;
		price: string;
	}[];
	product_name: string;
	spice_level: any[];
	stock_availability: boolean;
	updated_at: string;
	uuid: string;
	vendor_uuid: string | null;
	_id: string;
}
