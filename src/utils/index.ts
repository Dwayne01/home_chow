import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const signup = async (email: string, password: string) => {
	try {
		const user = await createUserWithEmailAndPassword(auth, email, password);
		return user;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);
	}
	return false;
};

export const login = async (email: string, password: string) => {
	try {
		const user = await signInWithEmailAndPassword(auth, email, password);
		return user;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);
	}
	return false;
};

export const loginWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	try {
		const user = await signInWithPopup(auth, provider);
		return user;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);
	}
	return false;
};

export const logout = async () => {
	await signOut(auth);
	return true;
};

export const authListener = async () =>
	onAuthStateChanged(auth, (user) => {
		if (user) {
			return user;
		}
		return null;
	});
