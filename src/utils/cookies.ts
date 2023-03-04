import Cookies from "js-cookie";

export const setSessionCookie = (session: any, expires = 1): void => {
	Cookies.remove("session");
	Cookies.set("session", session, { expires });
};

export const clearSessionCookie = (): void => {
	Cookies.remove("session");
};

export const getSessionCookie: any = () => {
	const sessionCookie = Cookies.get("session");

	if (sessionCookie === undefined) {
		return null;
	}
	return sessionCookie;
};
