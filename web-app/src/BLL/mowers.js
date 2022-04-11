const mowersRepo = require( "../DAL/mowers.js" )

function getAllMowers(callback){
    mowersRepo.getAllMowers(callback)
}
module.exports = {
    getAllMowers
}