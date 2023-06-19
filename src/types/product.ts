export interface ProductResponse {
	status_code: number;
	status: string;
	message: string;
	body: null;
	user_id: string;
	id_token: string;
	refresh_token: string;
}

export interface AddProductPayload {
	image: string;
	product_name: string;
	listing_category: string;
	diet_info: {
		ingredients: string[];
		nutritional_info: Record<string, any>;
		dietary_restrictions: string[];
	};
	prices: { size: string; price: string }[];
	description: string;
	stock_availability: boolean;
}
