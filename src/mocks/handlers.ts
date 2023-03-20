import { rest } from "msw";
import { sampleMock } from "./resolvers";

export const handlers = [
	rest.get("https://homechow.herokuapp.com/pokemon", sampleMock),
];
