require('dotenv').config();
const express           = require("express")

// import managers here and send them as objects to have most imports at the same place.
const userManager       = require("../BLL/users.js")
const mowersManager     = require("../BLL/mowers.js")

const usersRouter       = require("./routes/users-router.js")
const mowersRouter      = require("./routes/mowers-router.js")
const standardRouter    = require("./routes/standard-router.js")

const app = express()

// configurations
app.use(express.json())
app.use(express.urlencoded())

// routes
app.use("/users", usersRouter(userManager))
app.use("/mowers", mowersRouter(mowersManager))
app.use("/", standardRouter())

const port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log("express app listening on port", port)
})

