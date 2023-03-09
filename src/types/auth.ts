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
