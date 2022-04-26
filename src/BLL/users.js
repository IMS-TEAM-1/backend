const usersRepo = require( "../DAL/users.js" )

async function getAllUsers(){
    return await usersRepo.getAllUsers()
}
module.exports = {
    getAllUsers
}