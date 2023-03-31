import { PokemonApiResult } from "@/hooks/usePokemon";
import { AuthApiResult } from "@/hooks/useAuth";
import { sampleResponseMock } from "public/mock/sample";
import { sampleAuthResponseMock } from "public/mock/sampleAuth";

export const sampleMock = (
	req: any,
	res: (arg0: any, arg1: any) => any,
	ctx: {
		status: (arg0: number) => any;
		json: (arg0: PokemonApiResult) => any;
	}
) => res(ctx.status(200), ctx.json(sampleResponseMock));

export const deleteMock = (
	req: any,
	res: (arg0: any, arg1: any) => any,
	ctx: {
		status: (arg0: number) => any;
		json: (arg0: PokemonApiResult) => any;
	}
) => res(ctx.status(200), ctx.json(sampleResponseMock));

export const authLoginMock = (
	req: any,
	res: (arg0: any, arg1: any) => any,
	ctx: {
		status: (arg0: number) => any;
		json: (arg0: AuthApiResult) => any;
	}
) => res(ctx.status(200), ctx.json(sampleAuthResponseMock));

export const authRegisterMock = (
	req: any,
	res: (arg0: any, arg1: any) => any,
	ctx: {
		status: (arg0: number) => any;
		json: (arg0: AuthApiResult) => any;
	}
) => res(ctx.status(200), ctx.json(sampleAuthResponseMock));
