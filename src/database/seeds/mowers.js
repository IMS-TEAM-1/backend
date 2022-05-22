exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('mower').del()
      .then(function () {
        // Inserts seed entries
        return knex('mower').insert([
          { name: 'The Fast and the Furious'},
          { name: '2 Fast 2 Furious'},
          { name: 'Terminator'}
        ]);
      });
  };