const express = require( "express" )
const userManager = require( "../BLL/users.js" )
const userRepo = require( "../DAL/users.js" )

const app = express()

app.use("/", function(req, res){
    userManager.helloWorld()
    res.json("test")
})

app.listen(8080, function(){
    console.log("express app listening on port 8080")
})

