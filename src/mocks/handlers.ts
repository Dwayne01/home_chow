import { rest } from "msw";
import { sampleMock, getVerifyCodeMock } from "./resolvers";

export const handlers = [
	rest.get("https://homechow.herokuapp.com/pokemon", sampleMock),
	rest.delete("https://homechow.herokuapp.com/pokemon", sampleMock),
	rest.get("https://homechow.herokuapp.com/verify-code", getVerifyCodeMock),
];
