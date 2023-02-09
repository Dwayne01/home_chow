import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
	const { user, login, loginWithGoogle } = useAuth();
	const router = useRouter();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	useEffect(() => {
		if (user) {
			router.push("/home");
		}
	}, [router, user]);

	return (
		<div>
			<div>
				click to : <Link href="/signup"> sign-up</Link>
			</div>
			<h1>Login Page</h1>
			<div>
				<form
					onSubmit={async (e: any) => {
						e.preventDefault();
						await login(email, password);
					}}
				>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							onChange={(text) => setEmail(text.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							onChange={(text) => setPassword(text.target.value)}
						/>
					</div>
					<button type="submit">Login</button>
				</form>
			</div>
			<div>
				<button type="button" onClick={loginWithGoogle}>
					Login with Google
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
