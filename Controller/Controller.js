
const myUser = require("../Model/Model")
// const {generateToken} = require("../Config/generateToken")
const jwt = require("jsonwebtoken")


const regUser = async (req, res)=>{
  try{
    const  {zones, name, email } =req.body

    const userExist = await myUser.findOne({email})

    if(userExist){myUser
      return res.status(401).json({message :"this email has already taken"})
    }

   

    const newReg = await myUser.create({
      
      zones, 
      name,
      email
     

    })
     const token = jwt.sign(
      {
        id : newReg._id,
        name : newReg.name,
        email: newReg.email
      },
      "fghjkl;kj",
      {expiresIn :"1d"}
    )
    res.status(201).json({
      message:"user Register",
      data:{
        newReg,
        token:token
      }
    })



  }catch(error){
    res.status(400).json({
      message:error.message
    })
  }
}

// const LoginUser = async (req, res) => {
//     try{
//       const {email , name} = req.body

//       const user = await myUser.findOne({email})

//       if(user){
//         const checkPassword = await user.matchPassword(req.body.name, user.name)
//         if(checkPassword){
//           const {zones, ...info} = user._doc
//           const token = generateToken({
//             id:user._id,
//             email:user.email,
//             name:user.name
//           })
          
//           res.status(200).json({
//             message: `melcome back ${user.fullName}`,
//             data:{...info,token}
//           })

//         }else{
//           res.status(400).json({
//             message : "password is incorrect"
//           })
//         }


//       }else{
//         res.status(400).json({
//           message : "user doesn't exist"
//         })
//       }



//     }catch(error){
//       res.status(400).json({
//         message : error.message
//       })
//     }
// }

const getAll = async (req, res) =>{
  try{
    
    const allData  = await myUser.find()
    res.status(200).json({
      message : "all data",
      data:allData
    })
  }catch(error){
    res.status(400).json({
      message:"can't get all data"
    })
  }
}

module.exports = {
  regUser,
  // LoginUser,
  getAll
}