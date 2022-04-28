const { response } = require("express")
const mowersRepo = require( "../DAL/mowers.js" )

async function getAllMowers(){

    const response = {}

    try{
        response.content = await mowersRepo.getAllMowers()
    }
    catch(err){
        console.log(err)
        response.status = 500
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
    }

    return response
}

async function createMower(data){

    if(!data.name){
        response.status = 400
    }

    try{ 
        response.content = await mowersRepo.createMower(data) 
    }
    catch(err){
        console.log(err)
        response.status = 500
    }

    return response
     
}

async function updateMower(data, mowerId){
    
    const response = {}

    if(!data){
        response.status = 400
    }

    try{
        await mowersRepo.updateMower(data, mowerId)
        response.status = 200
    }
    catch(err) {
        console.log(err)
        response.status = 500
    }

    return response
}

async function getMowerLocations(mowerId){

    const response = {}

    if(!mowerId){
        response.status = 400
    }

    try{
        response.content = await mowersRepo.getMowerLocations(mowerId)
    }
    catch(err){
        console.log(err)
        response.status = 500
    } 
    return response
}

async function createMowerLocation(data, mowerId){

    const response = {}

    if(!mowerId || !data.x || !data.y ){
        response.status = 400
        return response
    }

    data.mower_id = mowerId
    
    try{
        await mowersRepo.createMowerLocation(data)
        response.status = 200
    }
    catch(err){
        console.log(err)
        response.status = 500
    }

    return response
}

async function getMowerImages(mowerId){

    const response = {}

    if(!mowerId){
        response.status = 400
        return response
    }

    try{
        response.content = await mowersRepo.getMowerImages(mowerId)
    }
    catch(err){
        console.log(err)
        response.status = 500
    }

    return response
}

async function createMowerImage(data, mowerId){

    if(!mowerId || !data.image ){
        response.status = 400
        return response
    }

    try{
        await mowersRepo.createMowerImage(data, mowerId)
        response.status = 400
    } 
    catch(err) {
        console.log(err)
        response.status = 400
    }
    return response
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