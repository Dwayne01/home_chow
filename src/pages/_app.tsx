import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
	<Component {...pageProps} />
);

export default appWithTranslation(App);
