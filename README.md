# backend
start the app by running `docker-compose build && docker-compose up -d` in the backend folder

## architecture choices

### packages
written in javascript express framework

ORM bookshelf & knex

### Operations
{ip-address}/users - GET request that fetches all users

{ip-address}/users/{id} - GET request a specific user based on ID

{ip-address}/users/{id} - PUT update a user

{ip-address}/users/{id} - POST create user

{ip-address}/users/{id} - DELETE specific user

{ip-address}/mowers - GET all mowers

{ip-address}/mowers/{id} - GET specific mower

{ip-address}/mowers/{id} - PUT update mower

{ip-address}/mowers/{id} - POST create mower

{ip-address}/mowers/{id} - DELETE specific mower

### three layered architecture

#### Data access layer

#### Business logic layer

#### Presentation layer
