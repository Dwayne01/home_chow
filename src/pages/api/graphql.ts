/* eslint-disable class-methods-use-this */
// eslint-disable-next-line max-classes-per-file
import "reflect-metadata"
import { ApolloServer } from "apollo-server-micro"
import { NextApiRequest, NextApiResponse } from "next";
import { Resolver, Query, ObjectType, Field, ID, buildSchema } from "type-graphql"

@ObjectType()
export class Dish {
    @Field(() => ID)
    name: string;
}

@Resolver(Dish)
export class DishesResolver {
    @Query(() => [Dish])
    dishes(): Dish[] {
        return [
            { name: "Abc" },
            { name: "xyz" },
        ];
    }
}

const schema = await buildSchema({
    resolvers: [DishesResolver]
});

const server = new ApolloServer({
    schema,

});

export const config = {
    api: {
        bodyParser: false,
    },
};

const startServer = server.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res)
} 