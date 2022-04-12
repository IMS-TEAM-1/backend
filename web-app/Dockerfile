FROM node:16.0.0

EXPOSE 8080

WORKDIR /web-app

COPY package*.json ./

RUN npm install
RUN npm run knex migrate:latest

COPY src src

CMD npm run dev