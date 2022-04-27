const usersRepo = require( "../DAL/users.js" )

async function getAllUsers(){

    try{
        return await usersRepo.getAllUsers()
    }
    catch(err){
        console.log(err)
        return 500
    }
}

async function createUser(data){
    
    if(!data.username) return 400 // usernamename is requried
    if(!data.password) return 400 // password is requried

    try{
        return await usersRepo.createUser(data)
    }
    catch(err){
        console.log(err)
        return 500
    }
     
}

module.exports = {
    getAllUsers,
    createUser
}