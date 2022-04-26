const mowersRepo = require( "../DAL/mowers.js" )

async function getAllMowers(){
    return await mowersRepo.getAllMowers()
}
async function createMower(data){
    return await mowersRepo.createMower()
}
module.exports = {
    getAllMowers,
    createMower
}