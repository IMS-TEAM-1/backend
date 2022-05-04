exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mower_location').del()
    .then(function () {
      // Inserts seed entries
      return knex('mower_location').insert([
        { mower_id: 1, x: 0, y: 0 },
        { mower_id: 1, x: 0, y: 1 },
        { mower_id: 1, x: 1, y: 0 },
        { mower_id: 1, x: 1, y: 1 },
        { mower_id: 2, x: 1, y: 1 }
      ]);
    });
};
