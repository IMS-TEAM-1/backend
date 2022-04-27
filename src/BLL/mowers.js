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

async function getMowerLocation(mowerId){

    if(!mowerId) return 400

    try{
        return await mowersRepo.getMowerLocation(mowerId)
    }
    catch(err){
        console.log(err)
        return 500
    }
    
}

module.exports = {
    getAllMowers,
    createMower,
    getMowerLocation
}