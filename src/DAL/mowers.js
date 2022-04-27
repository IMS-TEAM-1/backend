const Mower = require('../database/models/Mower');
const MowerLocation = require('../database/models/MowerLocation');

async function getAllMowers(){

    return await Mower.find({})
}

async function createMower(data){

    await Mower.create(data)
}

async function getMowerLocation(mowerId){

    return await MowerLocation.find({mower_id:mowerId})    
}

module.exports = {
    getAllMowers,
    createMower,
    getMowerLocation
}
