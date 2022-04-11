const bcrypt = require('bcryptjs');

const password = 'password'
const hash = bcrypt.hashSync(password, 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { username: 'user-01', password: hash },
        { username: 'user-02', password: hash },
        { username: 'user-03', password: hash }
      ]);
    });
};
