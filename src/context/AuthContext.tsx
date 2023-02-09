import { createContext, useContext, useEffect, useState } from "react";
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

const AuthContext = createContext<{
  user: UserInfo;
  login: (email: string, password: string) => Promise<boolean>;
  ...
}>({
  user: null,
  login: () => new Promise(() => {}),
  ...
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [user, setUser] = useState<User | null>();
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

	const signup = (email: string, password: string) => {
		try {
			createUserWithEmailAndPassword(auth, email, password);
			router.push("/home");
		} catch (error) {
			console.log(error);
		}
	};

	const login = async (email: string, password: string) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			console.log("login success");
			router.push("/home");
		} catch (error) {
			console.log(error);
		}
	};

	const loginWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		try {
			signInWithPopup(auth, provider);
			router.push("/home");
		} catch (error) {
			console.log(error);
		}
	};

	const logout = async () => {
		setUser(null);
		await signOut(auth);
		router.push("/");
	};

	return (
		<AuthContext.Provider
			value={{ user, login, signup, loginWithGoogle, logout }}
		>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
