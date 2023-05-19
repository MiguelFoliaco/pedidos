import { GraphQLString } from "graphql";

export const GRETTING = {
    type: GraphQLString,
    resolve: () => 'Hello word'
}