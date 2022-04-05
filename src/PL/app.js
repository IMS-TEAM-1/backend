const express           = require("express")
const userManager       = require("../BLL/users.js")
const usersRouter       = require("./routes/users-router.js")
const standardRouter    = require("./routes/standard-router.js")

const app = express()

app.use("/users", usersRouter(userManager))
app.use("/", standardRouter())


app.listen(8080, function(){
    console.log("express app listening on port 8080")
})

