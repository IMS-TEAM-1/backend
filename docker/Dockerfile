FROM node:16-alpine

WORKDIR /usr/src/app

ENV API_PORT=8080
EXPOSE ${API_PORT}

COPY package*.json ./
RUN npm install
RUN npm install knex -g
COPY . .

CMD sh docker/docker.sh