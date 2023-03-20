import { rest } from "msw";
import { sampleMock } from "./resolvers";

export const handlers = [rest.get("https://demo.com", sampleMock)];
