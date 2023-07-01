import { useApiMutate } from "@/hooks/useApi";
import { AddProductPayload, SearchProductPayload } from "@/types/product";

export const useAddProduct = () => {
	const res = useApiMutate<AddProductPayload, any>("post", "/product");
	return res;
};

export const useSearchProduct = () => {
	const res = useApiMutate<SearchProductPayload, any>(
		"post",
		"/product/search"
	);
	return res;
};
