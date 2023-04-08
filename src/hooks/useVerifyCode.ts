import { useApiQuery } from "@/hooks/useApi";

export interface VerifyCodeApiResult {
	results: {
		code: string;
	}[];
}

export const useVerifyCode = () => {
	const res = useApiQuery<VerifyCodeApiResult>("get", "/verify-code");
	return res;
};
