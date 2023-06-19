import { useApiMutate } from "@/hooks/useApi";
import { AddProductPayload } from "@/types/product";

export const useProduct = () => {
	const res = useApiMutate<AddProductPayload, any>("post", "/product");
	return res;
};
