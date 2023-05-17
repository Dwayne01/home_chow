import { useApiMutate } from "@/hooks/useApi";
import {
	AuthValidationPayload,
	AuthValidationResponse,
	LoginPayload,
	RegisterPayload,
} from "@/types/auth";
// import { ApiResponse } from "@/types";

export interface AuthApiResult {
	token: string;
	user: {
		id: string;
		name: string;
		email: string;
	};
}

export const useLogin = () => {
	const res = useApiMutate<LoginPayload, any>("post", "/auth/login");
	return res;
};

export const useRegister = () => {
	const res = useApiMutate<RegisterPayload, any>("post", "/auth/signup");
	return res;
};

export const useAuthValidation = () => {
	const res = useApiMutate<AuthValidationPayload, AuthValidationResponse>(
		"post",
		"/auth/social_auth_validation"
	);
	return res;
};
