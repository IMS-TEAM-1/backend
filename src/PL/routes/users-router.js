const express = require("express")

module.exports = function(usersManager) {
    
    const router = express.Router()

    /**
     * Get all users
     */
    router.get("/", async function(req, res){

        const response = await usersManager.getAllUsers()

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    /**
     * Create a new user
     */
    router.post("/", async function(req, res){

        const response = await usersManager.createUser(req.body)

        res.status(response.status ?? 200)
        res.json(response.content) 
    })

    /**
     * Get a user by id
     */
    router.get("/:id", async function(req, res){

        const id = req.params.id

        const response = await usersManager.getUserById(id)

        res.status(response.status ?? 200)
        res.json(response.content)  
    })

    return router
}