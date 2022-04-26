const User = require('../database/models/User');

async function getAllUsers(){
    return await User.find({})
}
module.exports = {
    getAllUsers
}
