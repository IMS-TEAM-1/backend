const mowersRepo = require( "../DAL/mowers.js" )

async function getAllMowers(){
    return await mowersRepo.getAllMowers()
}
async function createMower(data){
    //validate the data before sending to database
    if(!data.name) return 400 // name is requried

    return await mowersRepo.createMower(data) 
}

async function getMowerLocation(){
    return await mowersRepo.getMowerLocation()
}
module.exports = {
    getAllMowers,
    createMower,
    getMowerLocation
}