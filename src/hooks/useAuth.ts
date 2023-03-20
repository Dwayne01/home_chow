import { useApiMutate } from "@/hooks/useApi";
import { LoginPayload } from "@/types/auth";

export interface AuthApiResult {
	token: string;
	user: {
		id: number;
		name: string;
		email: string;
		profile: string;
		userType: "admin" | "vendor" | "customer" | "driver";
	};
}

export const useLogin = () => {
	const res = useApiMutate<LoginPayload, AuthApiResult>("post", "/auth/login");

	return res;
};

export const useRegister = () => {
	const res = useApiMutate<LoginPayload, AuthApiResult>("post", "/auth/signup");
	return res;
};

export const useLogout = () => {
	const res = useApiMutate<LoginPayload, AuthApiResult>("post", "/auth/logout");
	return res;
};
