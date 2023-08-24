
const mongoose = require("mongoose")
const connectDB = async () =>{
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017",{
            dbName:"registeruser",
            useNewUrlParser:"true",
            useUnifiedTopology:"true",

        })
        console.log("database succesfully connected")
    } catch (err) {
        console.log("db not connected")
        console.log(err)
    }
}

module.exports = connectDB