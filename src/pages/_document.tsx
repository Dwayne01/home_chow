import { Html, Head, Main, NextScript } from "next/document";
import { ApolloSandbox } from '@apollo/sandbox';

export function EmbeddedSandbox() {
	return (
		<ApolloSandbox
			initialEndpoint='http://localhost:3000/api/graphql'
			includeCookies={false}
		/>
	);
}

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>

		</Html>
	);
}
