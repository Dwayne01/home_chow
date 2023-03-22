import { useApiMutate } from "@/hooks/useApi";
import { LoginPayload } from "@/types/auth";
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
	const res = useApiMutate<LoginPayload, AuthApiResult>("post", "/auth/login");

	return res;
};

export const useRegister = () => {
	const res = useApiMutate<LoginPayload, AuthApiResult>(
		"post",
		"/auth/signup "
	);
	return res;
};
