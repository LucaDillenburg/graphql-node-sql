import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

const graphqlRoutes = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
});

export default graphqlRoutes;
