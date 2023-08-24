const mongoose =require("mongoose")

const registerSchema = mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    number:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    }
});

const register = mongoose.model('registeruser',registerSchema)
module.exports= register