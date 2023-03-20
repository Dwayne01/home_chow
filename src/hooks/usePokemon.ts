import { useApiMutate, useApiQuery } from "@/hooks/useApi";

export interface PokemonApiResult {
	count: number;
	next: string;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
}

export const usePokemon = () => {
	const res = useApiQuery<PokemonApiResult>("get", "/pokemon");

	return res;
};

export const useDeletePokemon = () => {
	const res = useApiMutate<{ test: string }, PokemonApiResult>(
		"delete",
		"/pokemon"
	);

	return res;
};
