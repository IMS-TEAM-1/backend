
exports.up = function(knex) {
    return knex.schema.createTable('mower', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.text('token');
        table.boolean('is_on');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('mower');
};
