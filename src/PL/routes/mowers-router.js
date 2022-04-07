const express = require("express")

module.exports = function(mowersManager) {
    const router = express.Router()

    router.get("/", function(req, res){
        mowersManager.getAllMowers(function(data){
            res.json(data)
        })
    })
    return router
}