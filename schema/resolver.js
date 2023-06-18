import { UserList, MovieList } from "../mockData.js"
import _ from "lodash"
const resolvers = {
    Query: {
        // USERS RESOLVERS
        users() {
            return UserList
        },
        // USER RESOLVER
        user(parent, args) {
            const id = Number(args.id);
            const user = _.find(UserList, { id })
            return user
        },
        // MOVIES RESOLVERS
        movies() {
            return MovieList
        },
        // MOVIE RESOLVER
        movie(parent, args) {
            const name = args.name;
            const movie = _.find(MovieList, { name })
            return movie
        }
    },
    User: {
        favoriteMovies() {
            return _.filter(MovieList, (val) => val.yearOfPublication >= 2019)
        }
    },
    //Mutations resolver
    Mutation:{
        createUser(parent,args){
            const user  = args.input 
            // console.log(user)
            // const lastID = UserList[UserList.length-1].id
            // const currID = lastID++;
            // user.ID  = currID;
            // console.log(user)
            user.id = UserList[UserList.length-1].id+1
            UserList.push(user)
            
            return user
        },
        updateUserName(parent,args){
            const {id,newUsername} = args.input
            let userUpdated;
            UserList.forEach(user => {
                if(user.id==id){
                    user.username  = newUsername
                    userUpdated  = user;
                }
            });
            return UserList
        },
        deleteUser(parent,args){
            console.log(args.input)
            return _.remove(UserList,(val)=>val.id==args.input.id)

        }
    }
}
export default resolvers