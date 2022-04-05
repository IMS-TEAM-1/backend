const express = require( "express" )
const userManager = require( "../BLL/users.js" )

const app = express()

app.use("/", function(req, res){
    userManager.getAllUsers(function(data){
        res.json(data)
    })
})
app.use("/users", function(req, res){
    userManager.getAllUsers(function(data){
        res.json(data)
    })
})

app.listen(8080, function(){
    console.log("express app listening on port 8080")
})

