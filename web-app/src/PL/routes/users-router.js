const express = require("express")

module.exports = function(usersManager) {
    const router = express.Router()

    router.get("/", function(req, res){
        usersManager.getAllUsers(function(data){
            res.json(data)
        })
    })
    return router
}