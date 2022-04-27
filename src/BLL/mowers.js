const mowersRepo = require( "../DAL/mowers.js" )

async function getAllMowers(){

    try{
        return await mowersRepo.getAllMowers()
    }
    catch(err){
        console.log(err)
        return 500
    }
}

async function getMowerById(id){

    try{
        return await mowersRepo.getMowerById(id)
    }
    catch(err){
        console.log(err)
        return 500
    }
}

async function createMower(data){

    if(!data.name) return 400 // name is requried

    try{ 
        return await mowersRepo.createMower(data) 
    }
    catch(err){
        console.log(err)
        return 500
    }
     
}

async function getMowerLocations(mowerId){

    if(!mowerId) return 400

    try{
        return await mowersRepo.getMowerLocations(mowerId)
    }
    catch(err){
        console.log(err)
        return 500
    } 
}

async function createMowerLocation(data, mowerId){

    if(!mowerId) return 400
    if(!data.x) return 400
    if(!data.y) return 400

    data.mower_id = mowerId

    try{
        await mowersRepo.createMowerLocation(data)
        return 200
    }
    catch(err){
        console.log(err)
        return 500
    } 
}

async function getMowerImages(mowerId){

    if(!mowerId) return 400

    try{
        return await mowersRepo.getMowerImages(mowerId)
    }
    catch(err){
        console.log(err)
        return 500
    }
}

async function createMowerImage(data, mowerId){

    if(!mowerId) return 400
    if(!data.image) return 400

    try{
        await mowersRepo.createMowerImage(data, mowerId)
        return 200
    } 
    catch(err) {
        console.log(err)
        return 500
    }
}

module.exports = {
    getAllMowers,
    getMowerById,
    createMower,
    getMowerLocations,
    createMowerLocation,
    getMowerImages,
    createMowerImage
}