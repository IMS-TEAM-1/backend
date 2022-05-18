exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mower_location_image').del()
    .then(function () {
      // Inserts seed entries
      return knex('mower_location_image').insert([
        { mower_location_id: 1, image: 'base64:image:1' },
        { mower_location_id: 3, image: 'base64:image:2' },
        { mower_location_id: 5, image: 'base64:image:3' },
      ]);
    });
};
