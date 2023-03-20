import MainHeader from "@/components/header/MainHeader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "@/components/footer/Footer";
import { useApiQuery } from "@/hooks/useApi";

export interface PokemonApiResult {
	count: number;
	next: string;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
}

const ComponentPage = () => {
	const { data, isLoading } = useApiQuery<PokemonApiResult>("get", "/pokemon");

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<MainHeader />
			<ul className="p-5">
				{data &&
					data.results &&
					data.results.map((pokemon) => (
						<ol key={pokemon.name}>{pokemon.name}</ol>
					))}
			</ul>

			<Footer footerColor="dark" />
		</div>
	);
};

export default ComponentPage;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
		},
	};
}
