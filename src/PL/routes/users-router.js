const express = require("express")

module.exports = function(usersManager) {
    
    const router = express.Router()

    router.get("/", async function(req, res){

        const response = await usersManager.getAllUsers()

        res.json(response)  
    })

    router.post("/", async function(req, res){

        const response = await usersManager.createUser(req.body)

        res.status(response)
        res.json()
    })

    return router
}