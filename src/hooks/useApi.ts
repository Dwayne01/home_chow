import useSWR, { KeyedMutator, SWRConfiguration } from "swr";
import { AxiosRequestConfig } from "axios";
import apiRequestHandler from "@/utils/apiHandler";

export type Fetcher<T> = (
	url: string,
	config?: AxiosRequestConfig
) => Promise<T>;

export function useApi<T, R = T>(
	url: string,
	config?: SWRConfiguration | null
): {
	data?: R;
	error?: Error;
	isLoading: boolean;
	mutate: KeyedMutator<T>;
} {
	const fetcher: Fetcher<R> = async (endpoint, options) => {
		const response = await apiRequestHandler(endpoint, options || {});
		return response.data;
	};

	const { data, error, isValidating, mutate } = useSWR(
		url,
		fetcher,
		config || {}
	);

	const isLoading = !data && !error && isValidating;

	return { data, error, isLoading, mutate: mutate as any as KeyedMutator<T> };
}
