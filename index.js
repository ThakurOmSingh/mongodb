const express = require('express');
const app = express ();
const cors = require("cors");

const connectDB =require("./connection/connection")
connectDB()
app.use(express.json());
app.use(cors());

const { registerUser } =require("./control/registercontrol")

app.post("/register",registerUser);    


const PORT = 5005;
app.listen(PORT,()=>{console.log(`serevr is running on ${PORT}`)})