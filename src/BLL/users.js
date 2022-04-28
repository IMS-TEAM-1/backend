const usersRepo = require( "../DAL/users.js" )

async function getAllUsers(){

    const response = {}

    try{
        response.content = await usersRepo.getAllUsers()
    }
    catch(err){
        console.log(err)
        response.status = 500
    }

    return response
}

async function createUser(data){
    
    const response = {}

    if(!data.username || !data.password){
        response.status = 400
    }

    try{
        response.content =  await usersRepo.createUser(data)
    }
    catch(err){
        console.log(err)
        response.status = 500
    }
     
    return response
}

module.exports = {
    getAllUsers,
    createUser
}