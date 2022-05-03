#!/bin/sh

echo "Migrations in progress ..."
npm run knex migrate:latest

# You can uncomment this commamd for your first launch if you want to seed some data in the DB
echo "Seeders in progress ..."
npm run knex seed:run

echo "Starting bot ..."
npm start

# You can use this command to start you app if you want to use nodemon
# npm run dev