const express = require("express")

const router = express.Router()

const {regUser, LoginUser, getAll} = require("../Controller/Controller")

router.post("/reg", regUser)
// router.post("/login", LoginUser)
router.get("/", getAll)

module.exports = router