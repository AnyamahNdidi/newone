const express = require("express")

const router = express.Router()

const {updateEm, postData, getAll} = require("../Controller/LandindControl")

router.post("/post", postData)

router.get("/", getAll)
// router.post("/login", LoginUser)
router.patch("/:id", updateEm)

module.exports = router