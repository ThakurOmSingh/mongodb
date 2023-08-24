// const register = require("../connection/table/register")
// const jwt =require("jsonwebtoken")
// const bcrypt = require("bcrypt")
// const JWT_SECRET_KEY = "mySecretKey"



// const registerUser = async(req,res) =>{
//     try{
//         const { firstname ,lastname ,  number , email , password } = req.body;
//         console.log(req.body)
//         console.log("firstname")
//         console.log(firstname)
//         console.log("lastname")
//         console.log(lastname)
//         let isRegistered = await register.findOne({email})

//         if(isRegistered){
//             return res.status(200).json({
//                 status:0,
//                 msg:"user already registered "
//             })
//         }

//         const _password = bcrypt.hashSync(password, 10);  
//         const data = new register({
//             firstname : firstname,
//             lastname,
//             number,
//             password : _password,
//             email
//         });
        
//         const dataSaved = await data.save()

//         return res.status(200).json({
//             status:1,
//             msg:"user registered successfully",
//             data:{
//                 email,
//                 id:dataSaved._id
//             }
//         })
//     }catch(err){
//         console.log("error occured while saving data")
//         console.log(err.message)
//     }
// }

// module.exports={
//     registerUser
// }
const register = require("../connection/table/register");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, number, email, password } = req.body;

    let isRegistered = await register.findOne({ email });

    if (isRegistered) {
      return res.status(200).json({
        status: 0,
        msg: "User already registered",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const data = new register({
      firstname: firstname,
      lastname: lastname,
      number: number,
      password: hashedPassword,
      email: email,
    });

    const dataSaved = await data.save();

    return res.status(200).json({
      status: 1,
      msg: "User registered successfully",
      data: {
        email,
        id: dataSaved._id,
      },
    });
  } catch (err) {
    console.log("Error occurred while saving data");
    console.log(err.message);
    return res.status(500).json({
      status: -1,
      msg: "An error occurred while processing your request",
    });
  }
};

module.exports = {
  registerUser,
};