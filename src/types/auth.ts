export interface LoginPayload {
	email: string;
	password: string;
	rememberMe?: boolean;
}

export interface RegisterPayload {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	phone: string;
	role: string[];
}

export interface RegisterResponse {
	status_code: number;
	status: string;
	message: string;
	body: null;
	firebase_uid: string;
}

export interface LoginResponse {
	status_code: number;
	status: string;
	message: string;
	body: null;
	user_id: string;
	id_token: string;
	refresh_token: string;
}

export interface AuthValidationPayload {
	id_token?: string;
}

export interface AuthValidationResponse {
	id_token?: string;
	message: string;
	user_id: string;
	status_code: number;
}

export interface ApplyVendorPayload {
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

export interface CodeVerificationPayload {
	code: string;
	firebase_uid: string;
	purpose: string;
}

export interface ResendCodePayload {
	email: string;
}

export interface Response {
	status_code: number;
	status: string;
	message: string;
	body: null;
}

export interface UserResponse {
	_id: string;
	created_at: string;
	updated_at: string;
	email: string;
	first_name: string;
	last_name: string;
	password: string;
	phone: string;
	role: string[];
	firebase_uid: string;
	is_verified: false;
	address: string;
}
