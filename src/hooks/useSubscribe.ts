import { SubscribeParams, SusbscribeResponse } from "@/types/comingsoon";
import { useApi } from "@/hooks/useApi";
import { KeyedMutator } from "swr";

export const useSubscribe = (): {
	data?: SusbscribeResponse | undefined;
	error?: Error | undefined;
	isLoading: boolean;
	mutate: KeyedMutator<SubscribeParams>;
} => {
	const data = useApi<SubscribeParams, SusbscribeResponse>("/subscribe");

	return data;
};
