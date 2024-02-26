import express from 'express'
import { getUserByEmail, createUser } from '../model/user.model.js'
import {ApiError} from '../utils/ApiError.js'
import {authentication, random} from '../utils/index.js'

export const register = async(req, res)=>{
   try {
    const {email, password, username} = req.body 
    if(!email || !password || !username) {
        throw new ApiError(400, "All fields are required")
    }

    const existinguser = await getUserByEmail(email)

    if(existinguser){
        throw new ApiError(400, "User already exists")
    }

    const salt = random()
    const user = await createUser({
        email,
        username,
        authentication: {
            salt,
            passowrd: authentication(salt, password),
        }
    })

    return res
    .status(200)
    .json(user).end()


   } catch (error) {
     throw new ApiError(400, "authentication failed")
   } 
}