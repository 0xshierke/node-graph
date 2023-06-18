import { ApolloServer } from '@apollo/server';
import { ExecutableDefinitionsRule } from 'graphql';


const typeDefs = `#graphql
    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
        friends:[User]
    }
    type Query {
        users:[User!]!
    }
    enum Nationality{
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }

`
export default typeDefs
