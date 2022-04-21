
const mongoose = require('mongoose')
const myLanding = require("../Model/LandingModel")
// const {generateToken} = require("../Config/generateToken")



const postData = async (req, res)=>{
  try{
    const  {title, description, sub1, sub2, sub3} =req.body

    const newData = await myLanding.create({
      
      title, 
      description,
      sub1,
      sub2,
      sub3
     

    })
    
    res.status(201).json({
      message:"Date Submited sucessfuly",
      data:newData
    })

  }catch(error){
    res.status(400).json({
      message:error.message
    })
  }
}

const getAll = async (req, res) =>{
  try{
    
    const allData  = await myLanding.find()
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


const updateEm = async (req, res) => {
  const { id } = req.params
  const { title, description, sub1, sub2, sub3 } = req.body
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`this ${id} is invalid`)
  }
  const dataEm = { title, description, sub1, sub2, sub3, _id: id }
  await myLanding.findByIdAndUpdate(id, dataEm, { new: true })
  res.json(myLanding)
}





// const getAll = async (req, res) =>{
//   try{
    
//     const allData  = await myUser.find()
//     res.status(200).json({
//       message : "all data",
//       data:allData
//     })
//   }catch(error){
//     res.status(400).json({
//       message:"can't get all data"
//     })
//   }
// }

module.exports = {
  postData,
  updateEm,
  getAll
 
  // getAll
}