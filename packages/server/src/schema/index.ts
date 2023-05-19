import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { GRETTING } from './querys/Gretting';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        gretting: GRETTING
    }
})

export const graphQLSchema = new GraphQLSchema({
    query: RootQuery,
    // mutation: {}
})