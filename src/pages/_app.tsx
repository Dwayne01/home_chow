import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import { applyTheme } from "@/theme/utils";

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		applyTheme();
	}, []);
	return <Component {...pageProps} />;
};

export default appWithTranslation(App);
