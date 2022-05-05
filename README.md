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



## architecture choices

### tech-stack

- written in javascript express framework

- ORM bookshelf & knex

- MySQL database

- Exposes endpoints via REST-architecture.


### three layered architecture

#### data access layer

Communicates with the database.
Not really needed in our case as we are using an ORM, but makes the code a bit cleaner in the business logic layer.

#### business logic layer

Handles all the logic within the system, like error handling

#### presentation layer

Exposes our enpoints
