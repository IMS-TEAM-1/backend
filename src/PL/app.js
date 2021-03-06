require('dotenv').config();
const express           = require("express")
const bodyParser        = require("body-parser")

// import managers here and send them as objects to have most imports at the same place.
const userManager       = require("../BLL/users.js")
const mowersManager     = require("../BLL/mowers.js")

const usersRouter       = require("./routes/users-router.js")
const mowersRouter      = require("./routes/mowers-router.js")
const standardRouter    = require("./routes/standard-router.js")

const app = express()

// configurations
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
}));


// routes
app.use("/users", usersRouter(userManager))
app.use("/mowers", mowersRouter(mowersManager))
app.use("/", standardRouter())

const port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log("express app listening on port", port)
})

