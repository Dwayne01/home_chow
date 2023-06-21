import axios, { AxiosRequestConfig } from "axios";
import { ErrorResponse } from "../types/index";
import { getSessionCookie } from "./cookies";
import config from "../../config";

const createApiClient = () => {
	const instance = axios.create({
		baseURL: !config.localApi ? config.baseUrl : config.localBaseURL,
	});

	// eslint-disable-next-line no-shadow
	instance.interceptors.request.use((config) => {
		const token = getSessionCookie();
		if (config.headers) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	});

	return instance;
};

const apiRequestHandler = async (options: AxiosRequestConfig) => {
	const client = createApiClient();

	const onSuccess = (res: any) => res.data;
	const onError = (error: ErrorResponse) => {
		if (axios.isAxiosError(error)) {
			return error.response?.data;
		}

		return { message: error.message, status: 500 };
	};

	// eslint-disable-next-line no-console
	console.log(
		config.localApi,
		config.baseUrl,
		config.localBaseURL
		// config.localApi ? config.baseUrl : config.localBaseURL
	);

	try {
		const response = await client.request(options);
		return onSuccess(response);
	} catch (error) {
		return onError(error as ErrorResponse);
	}
};

export default apiRequestHandler;
