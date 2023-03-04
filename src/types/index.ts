import { SWRConfiguration } from "swr";
import { AxiosRequestConfig } from "axios";

export interface ErrorResponse {
	message: string;
}

export type Fetcher<T> = (
	url: string,
	config?: AxiosRequestConfig
) => Promise<T>;

export interface ApiResponse<T = null> {
	message: string;
	status: "Success" | "Error";
	status_code: number;
	body: T;
}

export interface RequestOptions {
	queryKey?: any;
	queryFn?: any;
	swrConfig?: SWRConfiguration;
	mutationConfig?: any;
}
