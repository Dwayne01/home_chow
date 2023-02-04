import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

const SignupPage = () => {
  const { user, signup, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [router, user]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signup(email, password);
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
        click to : <Link href="/login"> login</Link>
      </div>
      <h1>SignUp Page</h1>
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
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <button type="button" onClick={handleLoginWithGoogle}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
