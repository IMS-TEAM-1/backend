const Mower = require('../database/models/Mower');

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
module.exports = {
    getAllMowers,
    createMower
}
