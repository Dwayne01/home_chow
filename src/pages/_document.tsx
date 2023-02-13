import { Html, Head, Main, NextScript } from "next/document";
import { ApolloSandbox } from '@apollo/sandbox';

// TODO: Remove this Sandbox component when the backend is ready
export function EmbeddedSandbox() {
	return (
		<ApolloSandbox
			initialEndpoint='http://localhost:3003/api/graphql'
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
