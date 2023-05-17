import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { applyTheme } from "@/theme/utils";
import { AuthContextProvider } from "@/context/AuthContext";
// import config from "config";
import NextI18NextConfig from "../../next-i18next.config";

// if (config.env === "development" && config.mockApi) {
// 	// eslint-disable-next-line global-require
// 	// require("../mocks");
// }

// Create a client
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
		},
	},
});

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		applyTheme();
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<AuthContextProvider>
				<Component {...pageProps} />
			</AuthContextProvider>
		</QueryClientProvider>
	);
};

export default appWithTranslation(App, NextI18NextConfig);
