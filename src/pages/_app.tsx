import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { applyTheme } from "@/theme/utils";
import NextI18NextConfig from "../../next-i18next.config";

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
			<Component {...pageProps} />
		</QueryClientProvider>
	);
};

export default appWithTranslation(App, NextI18NextConfig);
