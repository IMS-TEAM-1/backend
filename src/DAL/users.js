const users = [
    {
        id: "1",
        name: "foo",
        age: "bar"
    }, {
        id: "2",
        name: "foo",
        age: "bar"
    }, {
        id: "3",
        name: "foo",
        age: "bar"
    }, {
        id: "4",
        name: "foo",
        age: "bar"
    }, {
        id: "5",
        name: "foo",
        age: "bar"
    }
]
function getAllUsers(callback){
    callback(users)
}
function helloWorld(){
    console.log("hello world")
}
module.exports = {
    getAllUsers,
    helloWorld
}
