const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const axios = require('axios');
const fs = require('fs');

const URL = "http://13.48.151.7:8080/mowers/3/images"

function httpGetImage(base_url){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", `${base_url}/mowers/3/images`, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function httpPostImage(url){

    const b64 = getBase64("./onion.jpg")
    
    let data = 
    {
        x: 0,
        y: 0,
        image: b64,
    };


    axios.post(url, data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });
}

function getBase64(file){
    
    return fs.readFileSync(file, 'base64');
}


httpPostImage(URL)