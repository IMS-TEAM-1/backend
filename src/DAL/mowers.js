const Mower = require('../database/models/Mower');
const MowerLocation = require('../database/models/MowerLocation');
const MowerLocationImage = require('../database/models/MowerLocationImage');
const fs = require('fs')

async function getAllMowers(){

    return await Mower.find({})
}

async function getMowerById(id){

    return await Mower.where({id}).fetch()
}

async function createMower(data){

    return await Mower.create(data)
}

async function updateMower(data, id){

    return await Mower.update({id}, data)
}

async function getMowerLocations(id){

    return await MowerLocation.find({ mower_id:id }, ['images'])
}

async function getMowerLocation(mowerId, locationId){

    return await MowerLocation.find({ id: locationId, mower_id: mowerId }, ['images']);
}

async function createMowerLocation(data){

    return await MowerLocation.create(data)
}

async function getMowerImages(id){

    return await MowerLocationImage
        .find({}, [{ mowerLocation: query => query.where({ mower_id: id }) }])
        .filter(imageLocation => imageLocation.mowerLocation?.id);
}

async function createMowerImage(data, mowerLocationId){
    
    // store file as image on the server
    const fileName = `../images/${data.classification}.jpg`

    var base64Data = data.image.replace(/^data:image\/png;base64,/, "");

    fs.writeFile("out.jpg", base64Data, 'base64', function(err) {
        console.log(err);
    });

    return

    data.image = fileName
    
    data.mower_location_id = mowerLocationId
    return await MowerLocationImage.create(data)
}

module.exports = {
    getAllMowers,
    getMowerById,
    createMower,
    updateMower,
    getMowerLocations,
    getMowerLocation,
    createMowerLocation,
    getMowerImages,
    createMowerImage
}
