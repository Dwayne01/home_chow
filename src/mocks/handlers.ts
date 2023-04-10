import { rest } from "msw";
import {
	sampleMock,
	authLoginMock,
	authRegisterMock,
	applyVendorMock,
} from "./resolvers";

export const handlers = [
	rest.get("https://homechow.herokuapp.com/pokemon", sampleMock),
	rest.delete("https://homechow.herokuapp.com/pokemon", sampleMock),
	rest.post("https://homechow.herokuapp.com/auth/signup", authRegisterMock),
	rest.post("https://homechow.herokuapp.com/auth/login", authLoginMock),
	rest.post("https://homechow.herokuapp.com/applyVendor", applyVendorMock),
];
