const express = require("express")
const { route } = require("express/lib/application")

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

    route.get("/:id/location", async function(req, res){
        const mowerId = req.params.id
        const response =  await mowersManager.getMowerLocation(mowerId)
        res.status(response)
        res.json()
    })

    return router
}