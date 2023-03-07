import { Fetcher, RequestOptions } from "@/types";
import apiRequestHandler from "@/utils/apiHandler";
import { useMutation } from "react-query";
import useSWR from "swr";

export const useApiQuery = <T>(
	method: "get",
	url: string,
	options?: RequestOptions
) => {
	const { queryKey, queryFn, swrConfig } = options ?? {};

	const fetcher: Fetcher<T> = async (endpoint, config) => {
		const response = await apiRequestHandler({
			method,
			url: endpoint,
			...config,
		});
		return response.data;
	};

	const swr = useSWR<T>(queryKey ?? url, queryFn ?? fetcher, swrConfig);

	return swr;
};

export const useApiMutate = <TData, TResponse>(
	method: "post" | "put" | "delete" | "upload",
	url: string,
	options?: RequestOptions
) => {
	const { mutationConfig } = options ?? {};

	const mutation = useMutation<TResponse, TResponse, TData, unknown>(
		async (data) => {
			const response: TResponse = await apiRequestHandler({
				method,
				url,
				data,
			});

			return response;
		},
		mutationConfig
	);

	return mutation;
};
