import { getUserBySessionToken } from "../model/user.model.js";
import { ApiError } from "../utils/ApiError.js";


export const isOwner = async(req, _, next) => {
    try {
        const {id} = req.params
       
        const ownerID = req.user._id;
        

        if(ownerID != id){
            throw new ApiError(400, "not the owner")
        }

        next()


    } catch (error) {
        throw new ApiError(400, "error authenticating Admin")
    }
}
export const isAuthenticated = async(req, _, next) => {

    try {
        
        const sessionToken = req.cookies['toDoAuth']

        if(!sessionToken){
            throw new ApiError(400, "User is not logged in")
        }

        const user = await getUserBySessionToken(sessionToken)

        if(!user) {
            throw new ApiError(400, "Please login again")
        }
        req.user = user

        next()

    } catch (error) {
        throw new ApiError(400, "authentication failed")
    }
} 
