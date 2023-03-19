import { SubscribeParams } from "@/types/comingsoon";
import { useApiMutate } from "@/hooks/useApi";
import { ApiResponse } from "@/types";

export const useSubscribe = () => {
	const data = useApiMutate<SubscribeParams, ApiResponse<null>>(
		"post",
		"/subscribe"
	);

	return data;
};
