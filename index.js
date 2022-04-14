require("./config/db")
const PORT = process.env.PORT || 2023
const express = require("express")
const myRouter = require("./Router/router")
const dotenv = require("dotenv")
const cors = require("cors")

const app = express()


dotenv.config()
app.get("/",(req, res)=>{
  res.status(200).json({messgae :"api is ready"})
})
app.use(express.json())
app.use(cors({origin:"*"}))
app.use("/api", myRouter )

app.listen(PORT, ()=>{
  console.log( `port is runnig on ${PORT}`)
})