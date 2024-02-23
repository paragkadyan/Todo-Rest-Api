import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true},
    authentication:{
        password:{type:String, required:true, select:false},
        sale:{type:String, select:false},
        sessionToken:{type:String, select:false},
    }
},{
    timestamps:true,
})

export const User = mongoose.model("User", UserSchema)