const mowers = [
    {
        id: "1",
        name: "foo",
        type: "bar"
    }, {
        id: "2",
        name: "foo",
        type: "bar"
    }, {
        id: "3",
        name: "foo",
        type: "bar"
    }, {
        id: "4",
        name: "foo",
        type: "bar"
    }, {
        id: "5",
        name: "foo",
        type: "bar"
    }
]
function getAllMowers(callback){
    callback(mowers)
}
module.exports = {
    getAllMowers
}
