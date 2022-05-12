const mowersRepo = require( "../DAL/mowers.js" )
const vision = require("@google-cloud/vision")

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

    if(!id || !data.x || !data.y){
        response.status = 400
        response.content = 'bad request: missing required fields'

        return response
    }

    data.mower_id = id
    
    try{
        await mowersRepo.createMowerLocation(data)
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

    // validation
    if(!id || !data.image ){
        response.status = 400
        response.content = 'bad request: missing required fields'

        return response
    }

    // get classication from google
    const buf = Buffer.from(data.image, "base64");
    const client = new vision.ImageAnnotatorClient({
        credentials: JSON.parse(process.env.GOOGLE_VISION_PRIVATE_KEY)
    });
    

    // Performs label detection on the image file
    const [result] = await client.labelDetection(buf)
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));


    // save the image
    try{
        const {content} = await createMowerLocation(location, mowerId)
        console.log('created location', content)

        const image = {
            image: data.image,
            classification: labels[0].description
        }
        
        response.content = await mowersRepo.createMowerImage(image, content.id)
        console.log('created image', content)

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