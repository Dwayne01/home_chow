import React from "react";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
	const { user, logout } = useAuth();
	return (
		<div>
			<h1>Home</h1>
			<p>{user?.displayName}</p>
			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default Home;
