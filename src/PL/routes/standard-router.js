const express = require("express")

module.exports = function() {
    
    const router = express.Router()

    router.get("/", async function(req, res){
       res.json("hello world")
    })

    return router
}