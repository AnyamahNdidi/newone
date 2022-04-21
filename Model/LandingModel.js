const mongoose = require("mongoose")
// const bycrpt = require("bcrypt")

const landSchema = mongoose.Schema({

 
  title:{
    type:String,
    require:true
  },
  description:{
    type:String,
    default:false
  },
 
  sub1:{
    type:String,
    default:false
  },
  sub2:{
    type:String,
    default:false
  },
  sub3:{
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



const mylandSchema = mongoose.model("landing",  landSchema)
module.exports = mylandSchema