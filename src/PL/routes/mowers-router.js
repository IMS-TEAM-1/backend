const express = require("express")
const { route } = require("express/lib/application")

module.exports = function(mowersManager) {
    
    const router = express.Router()

    router.get("/", async function(req, res){

        const response = await mowersManager.getAllMowers()

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    router.post("/", async function(req, res){

        const response = await mowersManager.createMower(req.body)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    router.post("/:id", async function(req, res){

        const mowerId = req.params.id

        const response = await mowersManager.updateMower(req.body, mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    router.get("/:id/locations", async function(req, res){

        const mowerId = req.params.id

        const response =  await mowersManager.getMowerLocations(mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    router.get("/:mowerId/locations/:locationId", async function(req, res){

        const { mowerId, locationId } = req.params

        const response =  await mowersManager.getMowerLocation(mowerId, locationId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    router.get("/:id/images", async function(req, res){

        const mowerId = req.params.id

        const response =  await mowersManager.getMowerImages(mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    return router
}