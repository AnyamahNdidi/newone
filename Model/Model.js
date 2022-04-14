const mongoose = require("mongoose")
// const bycrpt = require("bcrypt")

const myUser = mongoose.Schema({

 
  zones:{
    type:String,
    require:true
  },
  name:{
    type:String,
    default:false
  },
 
  email:{
    type:String,
    default:false
  },

  // zonesmainUser:[{ 
  //   type:mongoose.Schema.Types.ObjectId,
  //   ref:"userzones"
  // }]
 
},
{timestamps:true}
)



const allUser = mongoose.model("users",  myUser)
module.exports = allUser