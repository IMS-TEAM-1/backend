# backend

First, we need to create the .env file needed for mysql. Copy the `.env.example` file, rename it `.env` and save. The content shall all be correct

start the app by running `docker-compose build && docker-compose up -d` in the backend folder

We are having dependency issues as of now, if you encounter them then run `npm install --save bookshelf --legacy-peer-deps` Working on a fix...

If you are on windows the docker.sh script will not work, instead alter the Dockerfile CMD line to look like this:

```Dockerfile
CMD npm run knex migrate:latest &&\
    npm run knex seed:run &&\
    npm run start
```

## architecture choices

### tech-stack

- written in javascript express framework

- ORM bookshelf & knex

- MySQL database

- Exposes endpoints via REST-architecture.


### three layered architecture

#### Data access layer

#### Business logic layer

#### Presentation layer
