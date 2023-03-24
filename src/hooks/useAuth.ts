import { useApiMutate } from "@/hooks/useApi";
import { LoginPayload, RegisterPayload } from "@/types/auth";
import { ApiResponse } from "@/types";

export interface AuthApiResult {
	token: string;
	user: {
		id: string;
		name: string;
		email: string;
	};
}

export const useLogin = () => {
	const res = useApiMutate<LoginPayload, AuthApiResult>("post", "/auth/login");

	return res;
};

export const useRegister = () => {
	const res = useApiMutate<RegisterPayload, ApiResponse>("post", "/signup ");
	return res;
};
