export interface ProductResponse {
	status_code: number;
	status: string;
	message: string;
	body: null;
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
