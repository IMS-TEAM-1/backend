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

    router.get("/:mowerId", async function(req, res){

        const { mowerId } = req.params

        const response = await mowersManager.getMowerById(mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    router.post("/:mowerId", async function(req, res){

        const { mowerId } = req.params

        const response = await mowersManager.updateMower(req.body, mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    router.get("/:mowerId/locations", async function(req, res){

        const { mowerId } = req.params

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

    router.post("/:mowerId/locations", async function(req, res){

        const { mowerId } = req.params
        const data = req.body

        const response =  await mowersManager.createMowerLocation(data, mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    router.get("/:mowerId/images", async function(req, res){

        const { mowerId } = req.params

        const response =  await mowersManager.getMowerImages(mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    router.post("/:mowerId/images", async function(req, res){

        const { mowerId } = req.params
        const data = req.body
        console.log(data)

        const response =  await mowersManager.createMowerImage(data, mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    return router
}