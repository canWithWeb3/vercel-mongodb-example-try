const router = require("express").Router()

router.get("/", (req, res) => {
    return res.send("Home Page vercel")
})

module.exports = router