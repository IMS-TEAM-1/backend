const express = require("express")

module.exports = function(usersManager) {
    
    const router = express.Router()

    router.get("/", async function(req, res){

        const response = await usersManager.getAllUsers()

        res.status(response.status)
        res.json(response.content)  
    })

    router.post("/", async function(req, res){

        const response = await usersManager.createUser(req.body)

        res.status(response.status)
        res.json(response.content) 
    })

    return router
}