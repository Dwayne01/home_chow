import axios, { AxiosRequestConfig } from "axios";
import { ErrorResponse } from "../types/index";
import { getSessionCookie } from "./cookies";
import config from "../../config";

const client = axios.create({
	baseURL: config.baseUrl,
});

const apiRequestHandler = async (
	url: string,
	options: AxiosRequestConfig<any>
) => {
	const token = getSessionCookie();

	client.defaults.headers.common.Authorization = `Bearer ${token}`;

	const onSuccess = (res: any) => res.data;
	const onError = (error: ErrorResponse) => {
		if (axios.isAxiosError(error)) {
			return error.response?.data;
		}

		return { message: error.message, status: 500 };
	};

	return axios(options).then(onSuccess).catch(onError);
};

export default apiRequestHandler;
