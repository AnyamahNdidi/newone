require("./config/db")
const express = require("express")
const myRouter = require("./Router/router")
const dotenv = require("dotenv")

const app = express()
const PORT = process.env.PORT || 2023

dotenv.config()
app.get("/",(req, res)=>{
  res.status(200).json({messgae :"api is ready"})
})

app.use("/api", myRouter )

app.listen(PORT, ()=>{
  console.log( `port is runnig on ${PORT}`)
})