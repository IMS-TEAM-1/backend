const User = require('../database/models/User');

async function getAllUsers(){
    return await User.find({})
}
async function createUser(data){
    try{
        await User.create(data)
        return 200
    } catch(err){
        console.log(err)
        return(500)
    }
    
}
module.exports = {
    getAllUsers,
    createUser
}
