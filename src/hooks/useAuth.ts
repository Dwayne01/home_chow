import { useApiMutate } from "@/hooks/useApi";
import {
	AuthValidationPayload,
	AuthValidationResponse,
	CodeVerificationPayload,
	LoginPayload,
	LoginResponse,
	RegisterPayload,
	RegisterResponse,
	Response,
	ResendCodePayload,
} from "@/types/auth";

export interface AuthApiResult {
	token: string;
	user: {
		id: string;
		name: string;
		email: string;
	};
}

export const useLogin = () => {
	const res = useApiMutate<LoginPayload, LoginResponse>("post", "/auth/login");
	return res;
};

export const useRegister = () => {
	const res = useApiMutate<RegisterPayload, RegisterResponse>(
		"post",
		"/auth/signup"
	);
	return res;
};

export const useAuthValidation = () => {
	const res = useApiMutate<AuthValidationPayload, AuthValidationResponse>(
		"post",
		"/auth/social_auth_validation"
	);
	return res;
};

export const useCodeVerification = () => {
	const res = useApiMutate<CodeVerificationPayload, Response>(
		"post",
		"/auth/code_verification"
	);
	return res;
};

export const useResendVerificationCode = () => {
	const res = useApiMutate<ResendCodePayload, Response>(
		"post",
		"/auth/resend_verification_code"
	);
	return res;
};
