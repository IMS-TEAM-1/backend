const usersRepo = require( "../DAL/users.js" )

async function getAllUsers(){

    return await usersRepo.getAllUsers()
}

async function createUser(data){
    
    if(!data.username) return 400 // usernamename is requried
    if(!data.password) return 400 // password is requried

    return await usersRepo.createUser(data) 
}

module.exports = {
    getAllUsers,
    createUser
}