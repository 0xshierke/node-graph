import UserList from "../mockData.js"

const resolvers = {
    Query:{
        users(){
            return UserList
        }
    }
}
export default resolvers