# backend

## introduction

This system is part of a three part system that shall immitate a Husqvarna autonomous mower.
The two other parts are the mobile application and the mower itself

## features

The backend stores mowers and users, mower location data, mower location image collision data.
These can be accessed via the exposed enpoints.

For documentation about the API enpoints, checkout [Api-docs.md](Api-docs.md)

## workflow

* The application updates the state of the mower from `standby` to `autonomous`.
 
* The mower listens for changes on the API and starts to move autonomously.
 
* The mower sends frequent location data to the server.

* When the mower registers a collision event, it takes a picture and sends it along with its location to the server. 
 
* The server uses the Google vision API for image classification and gets a response back to store with the image object in the database.

* The application draws, in real time, the path the mower has traversed, and shows any collision events along with the image for the user.


## setup

First, we need to create the .env file needed for mysql. Copy the `.env.example` file, rename it `.env` and save. The content shall all be correct

start the app by running `docker-compose build && docker-compose up -d` in the backend folder



# Software Design Description

## Tech-stack

- written in javascript express framework

- ORM bookshelf & knex

- MySQL (MariaDB) database

- Exposes endpoints via REST-architecture.

- Everything contained in Docker containers for easy startup


## Three layered architecture

The three layered architecture splits the main code base into three layers, each having a dedicated purpose.
This increases modularity and SRP (single responsibility principle) and can make debugging easier as each layer can be treated as their own module for black bock testing.

### Data access layer

The layer that communicates with the database.
Not really needed in our case as we are using an ORM, but makes the code a bit cleaner in the business logic layer, and enables us to create several layers for storing (like memory only for testing).

There exists one data repository file for each `BLL/manager` file


### Business logic layer

The heart of our project, where all the logic is process.
Handles all the logic within the system, like error handling, before forwarding it to the Data Access Layer for storing or to the Presentatin layer for communication with the user.

There exists one manager file for each router file.


### Presentation layer

The presentation layer is the user interface and communication layer of our web application.
This means it exposes our enpoints and handles serving data to and recieving data from the user.


#### Routes

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

To avoid houndreds of lines of code in a single file for handling all endpoints, we create routes in the `/PL/routes` folder, export a express.router() function and mount it in the `app.js` file.
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


## Docker

The whole backend is managed with two docker containers, one for the application itself and one for the database.
This enables us to start the project with `docker compose build && docker compose up`, and the MySQL database starts up along side with the applicaton.

The docker.sh script manages the startup and can be altered to insert sample data from the `/database/seeders` folder.
