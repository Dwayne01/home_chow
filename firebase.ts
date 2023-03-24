// Import the functions you need from the SDKs you need
import config from "config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: config.apiKey,
	authDomain: `${config.projectId}.firebaseapp.com`,
	projectId: config.projectId,
	storageBucket: `${config.projectId}.appspot.com`,
	messagingSenderId: config.messagingSenderId,
	appId: config.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
