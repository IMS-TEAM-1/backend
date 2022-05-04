const User = require('../database/models/User');

async function getAllUsers(){

    return await User.find({})

}

async function getUserById(id){

    return await User.where({id}).fetch()

}

async function updateUser(data, id){

    return await User.update({id}, data)
}

async function createUser(data){

    return await User.create(data)
    
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}
