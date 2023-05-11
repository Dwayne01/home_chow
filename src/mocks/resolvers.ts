import { PokemonApiResult } from "@/hooks/usePokemon";
import { VerifyCodeApiResult } from "@/hooks/useVerifyCode";
import { sampleResponseMock } from "public/mock/sample";
import { verifyCodeMock } from "public/mock/verifyCode";
import { AuthApiResult } from "@/hooks/useAuth";
import { sampleAuthResponseMock } from "public/mock/sampleAuth";
import { ApplyVendorApiResult } from "@/hooks/useApplyVendor";
import { sampleApplyVendorResponseMock } from "../../public/mock/sampleApplyVendorResponseMock";

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

// For code verification

export const authLoginMock = (
	req: any,
	res: (arg0: any, arg1: any) => any,
	ctx: {
		status: (arg0: number) => any;
		json: (arg0: VerifyCodeApiResult) => any;
	}
) => res(ctx.status(200), ctx.json(verifyCodeMock));

export const getVerifyCodeMock = (
	req: any,
	res: (arg0: any, arg1: any) => any,
	ctx: {
		status: (arg0: number) => any;
		json: (arg0: VerifyCodeApiResult) => any;
	}
) => res(ctx.status(200), ctx.json(verifyCodeMock));

export const authRegisterMock = (
	req: any,
	res: (arg0: any, arg1: any) => any,
	ctx: {
		status: (arg0: number) => any;
		json: (arg0: AuthApiResult) => any;
	}
) => res(ctx.status(200), ctx.json(sampleAuthResponseMock));

export const applyVendorMock = (
	req: any,
	res: (arg0: any, arg1: any) => any,
	ctx: {
		status: (arg0: number) => any;
		json: (arg0: ApplyVendorApiResult) => any;
	}
) => res(ctx.status(200), ctx.json(sampleApplyVendorResponseMock));
