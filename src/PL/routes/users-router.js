const express = require("express")

module.exports = function(usersManager) {
    const router = express.Router()

    router.get("/", async function(req, res){
        const response = await usersManager.getAllUsers()
        res.json(response)  
    })
    return router
}