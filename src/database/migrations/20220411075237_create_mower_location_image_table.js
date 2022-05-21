
exports.up = function(knex) {
    return knex.schema.createTable('mower_location_image', function(table) {
        table.increments();
        table.integer('mower_location_id').unsigned().notNullable();
        table.string('image');
        table.string('classification');

        table.foreign('mower_location_id')
            .references('mower_location.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('mower_location_image');
};
