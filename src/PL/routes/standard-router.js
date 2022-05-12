const express = require("express")
const vision = require("@google-cloud/vision")
const { config } = require("dotenv")
const fs = require('fs')

module.exports = function() {
    
    const router = express.Router()

    router.get("/", async function(req, res){

        const buf = Buffer.from(process.env.B64_IMAGE, "base64");
        const client = new vision.ImageAnnotatorClient({
            credentials: JSON.parse(process.env.GOOGLE_VISION_PRIVATE_KEY)
        });
        

        // Performs label detection on the image file
        const [result] = await client.labelDetection(buf)
        const labels = result.labelAnnotations;
        console.log('Labels:');
        labels.forEach(label => console.log(label.description));

        console.log('\n')
        console.log(labels.description)


        res.json(labels)
    })

    return router
}