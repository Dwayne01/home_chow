import React from "react";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";


const LoginPage = () => {
  const { user, login, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await  login(email, password);
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        click to : <Link href="/signup"> sign-up</Link>
      </div>
      <h1>Login Page</h1>
      <div>
        <form onSubmit={handleSubmit}>
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
        <button type="button" onClick={handleLoginWithGoogle}>Login with Google</button>
      </div>
    </div>
  );
};

export default LoginPage;
