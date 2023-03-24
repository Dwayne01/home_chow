import { rest } from "msw";
import { sampleMock, authLoginMock, authRegisterMock } from "./resolvers";

export const handlers = [
	rest.get("https://homechow.herokuapp.com/pokemon", sampleMock),
	rest.delete("https://homechow.herokuapp.com/pokemon", sampleMock),
	rest.post("https://homechow.herokuapp.com/signup", authRegisterMock),
	rest.post("https://homechow.herokuapp.com/login", authLoginMock),
];
