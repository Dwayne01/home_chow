import { useApiMutate } from "@/hooks/useApi";
import { APPLYVENDORPayload } from "@/types/auth";

export interface ApplyVendorApiResult {
	legalBusinessName: string;
	businessTradingName: string;
	status: string;
	city: string;
	area: string;
	street: string;
	building: string;
	floor: string;
	phoneNumber: string;
	alternatePhoneNumber: string;
	email: string;
	facebookUrl: string;
	instagramUrl: string;
	startDate: string;
	endDate: string;
	startTime: string;
	endTime: string;
}

export const useApplyVendor = () => {
	const res = useApiMutate<APPLYVENDORPayload, ApplyVendorApiResult>(
		"post",
		"/applyVendor "
	);
	return res;
};
