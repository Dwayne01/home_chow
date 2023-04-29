import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const { locales = [], push, pathname } = useRouter();

	return (
		<div>
			<select
				value={i18n.language}
				onChange={(e) => push(pathname, undefined, { locale: e.target.value })}
				className={`px-3 pr-7 py-2 rounded-md w-full bg-gray-100 border-1 border-gray-300
          focus:border-primary-color focus:ring-0 focus:outline-none focus:shadow-input`}
			>
				{locales.map((locale: string) => (
					<option key={locale} value={locale}>
						{locale}
					</option>
				))}
			</select>
		</div>
	);
};

export default LanguageSwitcher;
