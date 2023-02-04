import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  console.log(user);

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={async () => {
          await logout();
          router.push("/");
        }}
      >Logout</button>
    </div>
  );
};

export default Home;
