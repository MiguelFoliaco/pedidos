import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import morgan from 'morgan';
import { graphQLSchema } from '../schema';
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: graphQLSchema
}))
export const www = app;