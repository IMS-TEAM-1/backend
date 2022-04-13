require('dotenv').config();
const express           = require("express")

const userManager       = require("../BLL/users.js")
const mowersManager     = require("../BLL/mowers.js")

const usersRouter       = require("./routes/users-router.js")
const mowersRouter      = require("./routes/mowers-router.js")
const standardRouter    = require("./routes/standard-router.js")

const app = express()

app.use("/users", usersRouter(userManager))
app.use("/mowers", mowersRouter(mowersManager))
app.use("/", standardRouter())

const port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log("express app listening on port", port)
})

