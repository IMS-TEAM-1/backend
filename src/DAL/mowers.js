const Mower = require('../database/models/Mower');
const MowerLocation = require('../database/models/MowerLocation');

async function getAllMowers(){
    return await Mower.find({})
}
async function createMower(data){
    try{
        await Mower.create(data)
        return 200
    } catch(err){
        console.log(err)
        return(500)
    }
    
}
async function getMowerLocation(mowerId){
    return await MowerLocation.find({mower_id: mowerId})
}
module.exports = {
    getAllMowers,
    createMower,
    getMowerLocation
}
