const express = require("express")
const vision = require("@google-cloud/vision")
const { config } = require("dotenv")

module.exports = function() {
    
    const router = express.Router()

    router.get("/", async function(req, res){

        const {privateKey} = JSON.parse(process.env.GOOGLE_VISION_PRIVATE_KEY);
        const {clientEmail} = JSON.parse(process.env.GOOGLE_VISION_PRIVATE_KEY);
        const client = new vision.ImageAnnotatorClient({
            credentials: {
                private_key: privateKey,
                client_email: clientEmail,
            }
        });

        // Performs label detection on the image file
        const [result] = await client.labelDetection('https://produits.bienmanger.com/36700-0w470h470_Organic_Red_Onion_From_Italy.jpg')
        const labels = result.labelAnnotations;
        console.log('Labels:');
        labels.forEach(label => console.log(label.description));



        res.json(labels)
    })

    return router
}