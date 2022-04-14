const mongoose = require("mongoose")
const url = "mongodb+srv://admin:ilovemusic1234@cluster0.21gv0.mongodb.net/dteen?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
  console.log("data base is connected succesfully")
}).catch((error)=>{
   console.log("wrogn connectin")
})

module.exports = mongoose