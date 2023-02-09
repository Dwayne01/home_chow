import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { auth } from "../config/firebase";
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

type AuthContextType = {
	user: User | null;
	login: (email: string, password: string) => Promise<boolean>;
	loginWithGoogle: () => Promise<boolean>;
	logout: () => Promise<boolean>;
	signup: (email: string, password: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType>({
	user: null,
	login: async (email: string, password: string) => false,
	loginWithGoogle: async () => false,
	logout: async () => false,
	signup: async (email: string, password: string) => false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					uid: user.uid,
					email: user.email || "",
					displayName: user.displayName,
				});
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const signup = async (email: string, password: string) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			router.push("/home");
			return true;
		} catch (error) {
			console.log(error);
		}
		return false;
	};

	const login = async (email: string, password: string) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			router.push("/home");
			return true;
		} catch (error) {
			console.log(error);
		}
		return false;
	};

	const loginWithGoogle = async () => {
		const provider = new GoogleAuthProvider();
		try {
			await signInWithPopup(auth, provider);
			router.push("/home");
			return true;
		} catch (error) {
			console.log(error);
		}
		return false;
	};

	const logout = async () => {
		setUser(null);
		await signOut(auth);
		router.push("/");
		return true;
	};

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
