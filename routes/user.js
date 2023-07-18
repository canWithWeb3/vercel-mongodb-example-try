const router = require("express").Router()

router.get("/", (req, res) => {
    return res.send("Home Page vercel nodemon 3")
})

module.exports = router