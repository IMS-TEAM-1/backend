const usersRepo = require( "../DAL/users.js" )

/**
 * Every function returns an @Object
 * @status status code: 200,404,500
 * @content return value or error message
 */

async function getAllUsers(){

    const response = {}

    try{
        response.content = await usersRepo.getAllUsers()
    }
    catch(err){
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    }

    return response
}

async function getUserById(id){

    const response = {}

    try{
        response.content = await usersRepo.getUserById(id)
    }
    catch(err){
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    }

    return response
}

async function updateUser(data, id){

    const response = {}

    try{
        await usersRepo.updateUser(data, id)
    }
    catch(err){
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    }

    return response
}

async function createUser(data){
    
    const response = {}

    if(!data.username || !data.password){
        response.status = 400
        response.content = 'bad request: missing required fields'

        return response
    }

    try{
        await usersRepo.createUser(data)
    }
    catch(err){
        console.log(err)
        response.status = 500
        response.content = 'internal server error'
    }
     
    return response
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser
}