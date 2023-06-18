import {UserList,MovieList} from "../mockData.js"
import _ from "lodash"
const resolvers = {
    Query:{
        // USERS RESOLVERS
        users(){
            return UserList
        },
        // USER RESOLVER
        user(parent,args){
            const id = Number(args.id);
            const user = _.find(UserList,{id})
            return user    
        },
        // MOVIES RESOLVERS
        movies(){
            return MovieList
        },
        // MOVIE RESOLVER
        movie(parent,args){
            const name = args.name;
            const movie = _.find(MovieList,{name})
            return movie


        }
        
    },
    User:{
        favoriteMovies(){
            return _.filter(MovieList,(val)=> val.yearOfPublication>=2019)

        }
    }
}
export default resolvers