const express = require("express")

// import the mowersManager object as a parameter 
module.exports = function(mowersManager) {
    
    const router = express.Router()

    /**
     * Get all mowers
     */
    router.get("/", async function(req, res){

        const response = await mowersManager.getAllMowers()

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    /**
     * Create a new mower
     */
    router.post("/", async function(req, res){

        const response = await mowersManager.createMower(req.body)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    /**
     * Get a single mower by id
     */
    router.get("/:mowerId", async function(req, res){

        const { mowerId } = req.params

        const response = await mowersManager.getMowerById(mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    /**
     * Update a single mower with given id
     */
    router.post("/:mowerId", async function(req, res){

        const { mowerId } = req.params

        const response = await mowersManager.updateMower(req.body, mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    /**
     * Get all mower locations belonging to a mower
     */
    router.get("/:mowerId/locations", async function(req, res){

        const { mowerId } = req.params

        const response =  await mowersManager.getMowerLocations(mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    /**
     * Get a single mower location belonging to a mower
     */
    router.get("/:mowerId/locations/:locationId", async function(req, res){

        const { mowerId, locationId } = req.params

        const response =  await mowersManager.getMowerLocation(mowerId, locationId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    /**
     * Create a new mower location for a mower
     */
    router.post("/:mowerId/locations", async function(req, res){

        const { mowerId } = req.params
        const data = req.body

        const response =  await mowersManager.createMowerLocation(data, mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    /**
     * Get all collision images belongin to a mower
     */
    router.get("/:mowerId/images", async function(req, res){

        const { mowerId } = req.params

        const response =  await mowersManager.getMowerImages(mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    /**
     * Create a new collision image belonging to a mower
     */
    router.post("/:mowerId/images", async function(req, res){

        const { mowerId } = req.params
        const data = req.body

        const response =  await mowersManager.createMowerImage(data, mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    router.get("/:mowerId/direction", async function(req, res){

        const { mowerId } = req.params

        const response = await mowersManager.getMowerDirection(mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })

    router.post("/:mowerId/direction", async function(req, res){

        const { mowerId } = req.params
        const data =  { direction: req.body.direction ?? 'STOP'}
        console.log("Changing direction to "+req.body.direction)

        const response = await mowersManager.updateMower(data, mowerId)

        res.status(response.status ?? 200)
        res.json(response.content)
    })
    return router
}