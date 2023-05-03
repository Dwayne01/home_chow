export interface LoginPayload {
	email: string;
	password: string;
	rememberMe?: boolean;
}

export interface RegisterPayload {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface APPLYVENDORPayload {
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

export interface GoogleOAuthFunctions {
	handleGoogleSignUp?: () => void;
	handleGoogleSignIn?: () => void;
}
