
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
    type Query {
        users:UsersResult
        user(id:ID!):User
        movies:[Movie!]!
        movie(name:String!):Movie!
    }
    input CreatUserInput {
        name:String!
        username:String!
        age:Int!
        nationality:Nationality  = BRAZIL
    }
    input UpdateUserName {
        id:ID!
        newUsername:String!
    }
    input DeleteUser {
        id:ID!
    }
    type Mutation{
        createUser(input:CreatUserInput!):User!
        updateUserName(input:UpdateUserName):User!
        deleteUser(input:DeleteUser):User!
    }  
    enum Nationality{
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    } 
    type UserSuccessResult {
        users:[User!]!
    }
    type UserErrorResult {
        message:String!
    }

    union UsersResult = UserSuccessResult | UserErrorResult

`
export default typeDefs
