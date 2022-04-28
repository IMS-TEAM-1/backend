const Mower = require('../database/models/Mower');
const MowerLocation = require('../database/models/MowerLocation');
const MowerLocationImage = require('../database/models/MowerLocationImage');

async function getAllMowers(){

    return await Mower.find({})
}

async function getMowerById(id){

    return await Mower.where({id}).fetch()
}

async function createMower(data){

    await Mower.create(data)
}

async function updateMower(data, id){

    return await Mower.update({mower_id:id}, data)
}

async function getMowerLocations(id){

    return await MowerLocation.find({mower_id:id})    
}

async function createMowerLocation(data){

    return await MowerLocation.create(data)
}

async function getMowerImages(id){
    /**
     * Maybe remake the database so that we find images per mower_id, 
     * and then mower_location foreign key exists to fetch where the image was taken?
     * This means the code would look like this:
     * 
     * return await MowerLocationImage.find({mower_id: id})
     */

    return 404
}

async function createMowerImage(data, mowerId){
    return 404
}

module.exports = {
    getAllMowers,
    getMowerById,
    createMower,
    updateMower,
    getMowerLocations,
    createMowerLocation,
    getMowerImages,
    createMowerImage
}
