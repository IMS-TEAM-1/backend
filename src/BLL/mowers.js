const mowersRepo = require( "../DAL/mowers.js" )

/**
 * Every function returns an @Object
 * @status status code: 200,404,500
 * @content return value or error message
 */

async function getAllMowers(){

    const response = {}

    try{
        response.content = await mowersRepo.getAllMowers()
    }
    catch(err){
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    }

    return response
}

async function getMowerById(id){

    const response = {}

    try{
        response.content = await mowersRepo.getMowerById(id)
    }
    catch(err){
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    }

    return response
}

async function createMower(data){

    const response = {}

    if(!data.name){
        response.status = 400
        response.content = 'bad request: missing required fields'

        return response
    }

    try{ 
        response.content = await mowersRepo.createMower(data) 
    }
    catch(err){
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    }

    return response
     
}

async function updateMower(data, id){
    
    const response = {}

    if(!data || !id){
        response.status = 400
        response.content = 'bad request: missing required fields'

        return response
    }

    try{
        await mowersRepo.updateMower(data, id)
    }
    catch(err) {
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    }

    return response
}

async function getMowerLocations(id){

    const response = {}

    if(!id){
        response.status = 400
        response.content = 'bad request: missing required fields'

        return response
    }

    try{
        response.content = await mowersRepo.getMowerLocations(id)
    }
    catch(err){
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    } 
    return response
}

async function getMowerLocation(mowerId, locationId){

    const response = {}

    if(!mowerId || !locationId){
        response.status = 400
    }

    try{
        response.content = await mowersRepo.getMowerLocation(mowerId, locationId)
    }
    catch(err){
        console.log(err)
        response.status = 500
    }
    return response
}

async function createMowerLocation(data, id){

    const response = {}

    if(!id || isNaN(data.x) || isNaN(data.y)){
        response.status = 400
        response.content = 'bad request: missing required fields'

        return response
    }

    data.mower_id = id
    
    try{
        response.content = await mowersRepo.createMowerLocation(data)
    }
    catch(err){
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    }

    return response
}

async function getMowerImages(id){

    const response = {}

    if(!id){
        response.status = 400
        response.content = 'bad request: missing required fields'

        return response
    }

    const mower = await mowersRepo.getMowerById(id);
    if(!mower){
        response.status = 404
        return response
    }

    try{
        response.content = await mowersRepo.getMowerImages(id)
    }
    catch(err){
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    }

    return response
}

async function createMowerImage(data, id){

    const response = {}
    console.log(data)

    if(!id || !data.image || data.location ){
        response.status = 400
        response.content = 'bad request: missing required fields'

        return response
    }

    try{
        const location = await mowersRepo.createMowerLocation(data.location)
        console.log(location)
        // response.content = await mowersRepo.createMowerImage(data, )
    } 
    catch(err) {
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    }
    return response
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