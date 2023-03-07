import axios, { AxiosRequestConfig } from "axios";
import { ErrorResponse } from "../types/index";
import { getSessionCookie } from "./cookies";
import config from "../../config";

const client = axios.create({
	baseURL: config.baseUrl,
});

const apiRequestHandler = async (options: AxiosRequestConfig) => {
	const token = getSessionCookie();

	client.defaults.headers.common.Authorization = `Bearer ${token}`;

	const onSuccess = (res: any) => res.data;
	const onError = (error: ErrorResponse) => {
		if (axios.isAxiosError(error)) {
			return error.response?.data;
		}

		return { message: error.message, status: 500 };
	};

	const response = axios({
		...options,
		url: `${config.baseUrl}${options.url}`,
	})
		.then(onSuccess)
		.catch(onError);
	return response;
};

export default apiRequestHandler;
