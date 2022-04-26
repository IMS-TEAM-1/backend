const express = require("express")

module.exports = function(mowersManager) {
    const router = express.Router()

    router.get("/", async function(req, res){
        const response = await mowersManager.getAllMowers()
        res.json(response)
    })

    router.post("/", async function(req, res){
        const response = await mowersManager.createMower(req.body)
        res.status(response)
        res.json()
    })
    return router
}