
exports.up = function(knex) {
    return knex.schema.createTable('mower_location', function(table) {
        table.increments();
        table.integer('mower_id').unsigned().notNullable();
        table.float('x');
        table.float('y');
        table.timestamp('created_at').defaultTo(knex.fn.now());

        table.foreign('mower_id')
            .references('mower.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('mower_location');
};
