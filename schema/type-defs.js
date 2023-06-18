
const typeDefs = `#graphql
    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
        friends:[User]
        favoriteMovies:[Movie!]
    }
    type Movie{
        id:ID!
        name:String!
        yearOfPublication:Int!
        isInTheaters:Boolean!  
    }
    enum Nationality{
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }
    type Query {
        users:[User!]!
        user(id:ID!):User
        movies:[Movie!]!
        movie(name:String!):Movie!
    }
    
    
    

`
export default typeDefs
