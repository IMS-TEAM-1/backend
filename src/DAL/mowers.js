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
    const filePath = `${data.classification}_${Date.now()}.jpg`

    console.log("writing data to disk...")
    await writeToDisk(data.image, filePath)    
    
    data.image = filePath
    
    data.mower_location_id = mowerLocationId
    return await MowerLocationImage.create(data)
}

function writeToDisk(base64Image, fileName){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const buf = Buffer.from(base64Image, "base64");

            fs.writeFile(fileName, buf, (err) => {
                if(err){
                    console.log('error while writing data to disk...', err)
                    reject()
                } else {
                    console.log(`done writing ${fileName} to disk...`)
                    resolve()
                }
            })
        },10000)
    })
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
