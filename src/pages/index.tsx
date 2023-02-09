import Head from "next/head";
import Countdown from "./components/countdown";

export default function Home() {
	return (
		<>
			<Head>
			<title>Home Chow</title>
			<meta name="description" content="Generated by create next app" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			</Head>
			<Countdown />
		</>
	);
}
