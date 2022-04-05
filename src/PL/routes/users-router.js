const express = require("express")

module.exports = function(userManager) {
    const router = express.Router()

    router.get("/", function(req, res){
        userManager.getAllUsers(function(data){
            res.json(data)
        })
    })
    return router
}