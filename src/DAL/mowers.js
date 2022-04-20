const Mower = require('../database/models/Mower');

async function getAllMowers(callback){
    callback(await Mower.find({}))
}
module.exports = {
    getAllMowers
}
