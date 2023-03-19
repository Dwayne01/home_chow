import { SubscribeParams, SubscribeResponse } from "@/types/comingsoon";
import { useApiMutate } from "@/hooks/useApi";
import { ApiResponse } from "@/types";

export const useSubscribe = () => {
	const data = useApiMutate<SubscribeParams, ApiResponse<SubscribeResponse>>(
		"post",
		"/subscribe"
	);

	return data;
};
