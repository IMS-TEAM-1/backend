const mowersRepo = require( "../DAL/mowers.js" )

async function getAllMowers(){

    return await mowersRepo.getAllMowers()
}

async function createMower(data){

    if(!data.name) return 400 // name is requried

    return await mowersRepo.createMower(data) 
}

async function getMowerLocation(mowerId){

    return await mowersRepo.getMowerLocation(mowerId)
}

module.exports = {
    getAllMowers,
    createMower,
    getMowerLocation
}