import { PokemonApiResult } from "@/pages/sample-api";
import { sampleResponseMock } from "public/mock/sample";

export const sampleMock = (
	req: any,
	res: (arg0: any, arg1: any) => any,
	ctx: {
		status: (arg0: number) => any;
		json: (arg0: PokemonApiResult) => any;
	}
) => res(ctx.status(200), ctx.json(sampleResponseMock));
