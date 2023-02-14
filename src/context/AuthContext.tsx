/* eslint-disable no-console */
import {
	createContext,
	useContext,
	useEffect,
	useState,
	useMemo,
	ReactNode,
	useCallback,
} from "react";
import { login, signup, loginWithGoogle, logout } from "@/utils";
import { useRouter } from "next/router";
import { User } from "@/types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

type AuthContextType = {
	user: User | null;
	login: (email: string, password: string) => Promise<boolean>;
	loginWithGoogle: () => Promise<boolean>;
	logout: () => Promise<boolean>;
	signup: (email: string, password: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType>({
	user: null,
	login: async () => false,
	loginWithGoogle: async () => false,
	logout: async () => false,
	signup: async () => false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	const handleLogin = useCallback(async (email: string, password: string) => {
		try {
			await login(email, password);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}, []);

	const handleSignUp = useCallback(async (email: string, password: string) => {
		try {
			await signup(email, password);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}, []);

	const handleLoginWithGoogle = useCallback(async () => {
		try {
			await loginWithGoogle();
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}, []);

	const handleLogout = useCallback(async () => {
		try {
			await logout();
			router.push("/login");
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}, [router]);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
			if (userInfo) {
				setUser({
					uid: userInfo.uid,
					email: userInfo.email || "",
					displayName: userInfo.displayName,
					photoURL: userInfo.photoURL,
				});
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const value = useMemo<AuthContextType>(
		() => ({
			user,
			login: handleLogin,
			loginWithGoogle: handleLoginWithGoogle,
			logout: handleLogout,
			signup: handleSignUp,
		}),
		[user, handleLogin, handleSignUp, handleLoginWithGoogle, handleLogout]
	);

	return (
		<AuthContext.Provider value={value}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
