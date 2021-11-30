import express from 'express';
import graphqlRoutes from './graphql';
import routes from './routes';

var app = express();

app.use('/graphql', graphqlRoutes);

app.use(express.json());
app.use(routes);

app.listen(4000, async () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});
