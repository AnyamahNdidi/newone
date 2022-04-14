const jwt = require("jsonwebtoken")

const generateToken  = (user)=>{
  return jwt.sign(user, "ediwnslknvlkn", {
    expiresIn:"1d"
  })
}

module.exports = {
  generateToken
}