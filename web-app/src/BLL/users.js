const usersRepo = require( "../DAL/users.js" )

function getAllUsers(callback){
    usersRepo.getAllUsers(callback)
}
module.exports = {
    getAllUsers
}