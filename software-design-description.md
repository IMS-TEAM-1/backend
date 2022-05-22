# Software Design Description

# High level requirements

## B1.1

> The backend shall publish a REST API for reading and writing position data sent from the mower

A REST API in itself is not that challenging as it is simply exposing endpoints.
The difficult parts is under the hood for the logic behind storing and reading data from and to a databases.

For clearer management of the code in the backend a three layered architecture was chosen.


### Three layered architecture

The three layered architecture splits the main code base into three layers, each having a dedicated purpose.
This increases modularity and SRP (single responsibility principle) and can make debugging easier as each layer can be treated as their own module for black box testing.

#### Data access layer

The layer that communicates with the database. Not really needed in our case as we are using an ORM, but makes the code a bit cleaner in the business logic layer, and enables us to create several layers for storing (like memory only for testing).

#### Business logic layer

The heart of our project. Handles all the logic within the system, like error handling, before forwarding it to the Data Access Layer for storing or to the Presentation layer for communication with the user.

#### Presentation layer

This isolates the REST API into the presentation layer, and could in theory be swapped for any other presentation layer like a website.

### Presentation layer

The presentation layer is the user interface and communication layer of our web application.
This means it exposes our enpoints and handles serving data to and receiving data from the user.


##### Routes

Express handles routes by mounting functions to endpoints.
Example below:

```js
// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
```

To avoid hundreds of lines of code in a single file for handling all endpoints, we create routes in the `/PL/routes` folder, export a express.router() function and mount it in the `app.js` file.
Example below:

```js
// src/PL/routes/mowers.js

const express = require("express")

module.exports = function() {
    
  const router = express.Router()
  router.get("/", async function(req, res){
    ...
    res.json(response.content)
  })

  return router
}

// src/PL/app.js

const express = require("express")
const mowersRouter = require("./routes/mowers-router.js")
const app = express()

// mount mowers router at /mowers
app.use("/mowers", mowersRouter())

```


## B1.2

> The REST API shall contain a service for reading and writing image data

The presentation layer exposes an image endpoint mounted at `/mowers/:id/images`.
This endpoint enables both GET and POST requests.
A post requests needs the location in the form of x and y values, along with the image in base 64 format.
The image is then written to the file system of the server host machine.



## B1.3

> When image data is written, the service shall perform an image classification via for example Google Vision API

When a POST request to the image endpoint is called, the image gets sent to Google Vision API for classification before stored on the server.

The first results is taken as it is the results vision is the most certain is correct, at the cost of a generic description.
A location is first created to bind the collision image to.
The image is written to the server file system and the image object with description is then stored in the database.


# Process requirements

## Minimum

> "The code shall be under version control." 

Done in GitHub.

> "There shall be a Software Design Description document where each source code component is described." 

You are reading it now!

> "A basic Work Breakdown Structure (WBS) shall be created for the intended scope of the project." 

We have used Trello and time estimations there.
An excel file under the repository `logbooks` will explain this in detail.

> "An individual log book for each team member shall be kept documenting what has been accomplished and what time has been spent." 

Found under the repository `logbooks`

> "An analysis of the project shall be done (including process, technical aspects, collaboration and results) and documented in a Lessons Learned Document." 

