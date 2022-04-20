const User = require('../database/models/User');

async function getAllUsers(callback){
    callback(await User.find({}))
}
module.exports = {
    getAllUsers
}
