import { Html, Head, Main, NextScript } from "next/document";
import Countdown from './components/countdown';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<Countdown />
				<NextScript />
			</body>
		</Html>
	);
}
