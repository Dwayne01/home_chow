import React, { useEffect, useMemo, useState } from "react";
import {
	clearSessionCookie,
	getSessionCookie,
	setSessionCookie,
} from "@/utils/cookies";
// import { useApiQuery } from "@/hooks/useApi";

const AuthContext = React.createContext<{
	isSignedIn: boolean;
	login: (data: any, rememberMe?: boolean) => Promise<boolean>;
	logout: () => void;
	isUserDisabled: boolean;
	loading: boolean;
	token: string | null;
	user: any | null;
	selectedVehicleInfo: {
		selectedVehicleMake: string;
		selectedVehicleModel: string;
		selectedVehicleTrim: string;
	};
	profileImg: string | null;
	handleProfileImg: (data: string | null) => void;
	handleToken: (data: string) => void;
	handleUser: (data: any) => void;
	handleIsUserDisabled: (data: boolean) => void;
	handleVehicleInfo: (data: {
		selectedVehicleMake: string;
		selectedVehicleModel: string;
		selectedVehicleTrim: string;
	}) => void;
	checkIsUserLoggedIn: () => boolean;
}>({
	isSignedIn: false,
	profileImg: null,
	handleProfileImg: () => {},
	isUserDisabled: false,
	login: () => new Promise(() => {}),
	loading: false,
	user: null,
	token: null,
	selectedVehicleInfo: {
		selectedVehicleMake: "",
		selectedVehicleModel: "",
		selectedVehicleTrim: "",
	},
	logout: () => {},
	handleToken: () => {},
	handleUser: () => {},
	handleIsUserDisabled: () => {},
	handleVehicleInfo: () => {},
	checkIsUserLoggedIn: () => false,
});

const AuthContextProvider = (props: {
	children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => {
	const [user, setUser] = useState<any | null>(null);
	const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
	const [isUserDisabled, setIsUserDisabled] = useState<boolean>(false);
	const [token, setToken] = useState<string | null>(null);
	const [profileImg, setProfileImg] = useState<string | null>(null);
	const [selectedVehicleInfo, setSelectedVehicleInfo] = useState<{
		selectedVehicleMake: string;
		selectedVehicleModel: string;
		selectedVehicleTrim: string;
	}>({
		selectedVehicleMake: "",
		selectedVehicleModel: "",
		selectedVehicleTrim: "",
	});

	// eslint-disable-next-line no-undef
	const { query } = { query: (a: any) => a };

	const sessionCookie = getSessionCookie();

	const { isLoading, data: customerInfo } = query({
		queryKey: "getUserInfo",
		request: () => {},
		options: {
			enabled: !!sessionCookie,
		},
	});

	// call this function when you want to authenticate the user
	const login = async (data: any, rememberMe?: boolean) => {
		if (!data.token) return false;

		if (rememberMe) {
			setSessionCookie(data.token, 30);
		} else {
			setSessionCookie(data.token);
		}

		setToken(data.token);
		setIsSignedIn(true);
		setUser(data);

		return true;
	};

	// call this function to sign out logged in user
	const logout = (redirect?: boolean, param?: string) => {
		setUser(null);
		setToken(null);
		setIsSignedIn(false);
		clearSessionCookie();
		if (redirect && param) {
			window.location.href = `/login?redirect=${param}`;
		} else {
			window.location.href = "/login";
		}
	};

	const handleProfileImg = (data: string | null) => {
		setProfileImg(data);
	};

	const handleToken = (data: string) => {
		setToken(data);
	};

	const handleUser = (data: any) => {
		setUser(data);
	};

	const handleIsUserDisabled = (data: boolean) => {
		setIsUserDisabled(data);
	};

	const handleVehicleInfo = (data: {
		selectedVehicleMake: string;
		selectedVehicleModel: string;
		selectedVehicleTrim: string;
	}) => {
		setSelectedVehicleInfo(data);
	};

	useEffect(() => {
		if (user) {
			// LogRocket.identify(user.uuid, {
			// 	name: `${user.firstName} ${user.lastName}`,
			// 	email: user.email,
			// });
		}
	}, [user]);

	useEffect(() => {
		if (!sessionCookie) {
			setToken(null);
			setUser(null);
			setIsSignedIn(false);
			return;
		}

		if (!isLoading && customerInfo && !customerInfo.message) {
			setToken(sessionCookie);
			setUser(customerInfo);
			setIsSignedIn(true);
		} else {
			setToken(null);
			setUser(null);
			setIsSignedIn(false);
		}
	}, [sessionCookie, customerInfo, isLoading]);

	const checkIsUserLoggedIn = useMemo(() => {
		const checkIsUserLoggedInFunc = (): boolean => {
			if (sessionCookie) {
				return true;
			}
			return false;
		};
		return checkIsUserLoggedInFunc;
	}, [sessionCookie]);

	const value = useMemo(
		() => ({
			user,
			isSignedIn,
			isUserDisabled,
			setUser,
			loading: isLoading,
			token,
			handleToken,
			profileImg,
			handleUser,
			handleIsUserDisabled,
			login,
			logout,
			selectedVehicleInfo,
			handleVehicleInfo,
			checkIsUserLoggedIn,
			handleProfileImg,
		}),
		[
			user,
			isSignedIn,
			isUserDisabled,
			profileImg,
			isLoading,
			token,
			selectedVehicleInfo,
			checkIsUserLoggedIn,
		]
	);

	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	);
};

export { AuthContext, AuthContextProvider };
