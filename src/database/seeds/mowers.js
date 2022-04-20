exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('mower').del()
      .then(function () {
        // Inserts seed entries
        return knex('mower').insert([
          { name: 'mower-01'},
          { name: 'mower-02'},
          { name: 'mower-03'}
        ]);
      });
  };