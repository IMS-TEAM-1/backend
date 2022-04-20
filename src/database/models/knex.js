const config = require('../knexfile');
const knex = require('knex');
const bookshelf = require('bookshelf');

module.exports = bookshelf(knex(config));
