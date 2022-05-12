const express = require("express")
const vision = require("@google-cloud/vision")
const { config } = require("dotenv")
const fs = require('fs')

module.exports = function() {
    
    const router = express.Router()

    router.get("/", async function(req, res){
       res.json("hello world")
    })

    return router
}