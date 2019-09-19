import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    email : {
        type : String,
        unique : true,
        required : [true, "Lütfen bir e-posta adresi giriniz"] 
    },
    password: {
        type : String,
        required : [true, "Lütfen parolanızı giriniz"]
    },
    dataCreated : {
        type : Date,
        default : new Date()
    },
    dataModified : {
        type : Date,
        default : new Date()
    },
    lastLogin : {
        type : Date,
        default : new Date()
    }
})

export default mongoose.model("User", userSchema);