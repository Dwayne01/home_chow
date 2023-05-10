import { useApiMutate } from "@/hooks/useApi";
import {
	AuthValidationPayload,
	LoginPayload,
	RegisterPayload,
} from "@/types/auth";
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
	const res = useApiMutate<LoginPayload, ApiResponse<AuthApiResult>>(
		"post",
		"/login"
	);
	return res;
};

export const useRegister = () => {
	const res = useApiMutate<RegisterPayload, ApiResponse>("post", "/signup ");
	return res;
};

export const useAuthValidation = () => {
	const res = useApiMutate<AuthValidationPayload, { token: string }>(
		"post",
		"/auth/social_auth_validation"
	);
	return res;
};
