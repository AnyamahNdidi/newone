require("./config/db")
const express = require("express")


const app = express()
const PORT = process.env.PORT || 2023


app.get("/",(req, res)=>{
  res.status(200).json({messgae :"api is ready"})
})

app.listen(PORT, ()=>{
  console.log( `port is runnig on ${PORT}`)
})