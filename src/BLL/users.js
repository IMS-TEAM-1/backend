const userRepo = require( "../DAL/users.js" )

function getAllUsers(callback){
    userRepo.getAllUsers(callback)
}
function helloWorld(){
    userRepo.helloWorld()
}
module.exports = {
    getAllUsers,
    helloWorld
}