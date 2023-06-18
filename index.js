import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema/type-defs.js';
import resolvers from './schema/resolver.js';

const server  = new ApolloServer({
    typeDefs,
    resolvers
})
const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
