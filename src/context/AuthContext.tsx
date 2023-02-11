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
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { User } from "@/types";
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

	const signup = useCallback(
		async (email: string, password: string) => {
			try {
				await createUserWithEmailAndPassword(auth, email, password);
				router.push("/home");
				return true;
			} catch (error) {
				console.log(error);
			}
			return false;
		},
		[router]
	);

	const login = useCallback(
		async (email: string, password: string) => {
			try {
				await signInWithEmailAndPassword(auth, email, password);
				router.push("/home");
				return true;
			} catch (error) {
				console.log(error);
			}
			return false;
		},
		[router]
	);

	const loginWithGoogle = useCallback(async () => {
		const provider = new GoogleAuthProvider();
		try {
			await signInWithPopup(auth, provider);
			router.push("/home");
			return true;
		} catch (error) {
			console.log(error);
		}
		return false;
	}, [router]);

	const logout = useCallback(async () => {
		setUser(null);
		await signOut(auth);
		router.push("/");
		return true;
	}, [router]);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
			if (userInfo) {
				setUser({
					uid: userInfo.uid,
					email: userInfo.email || "",
					displayName: userInfo.displayName,
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
			login,
			signup,
			loginWithGoogle,
			logout,
		}),
		[user, login, signup, loginWithGoogle, logout]
	);

	return (
		<AuthContext.Provider value={value}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
