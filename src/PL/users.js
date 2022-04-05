const userRepo = require( "../BLL/users.js" )


module.exports = function() {
    return{
        getAllUsers: function(callback){
            return userManager.getAllUsers(callback)
        },
    }
}
     
    
