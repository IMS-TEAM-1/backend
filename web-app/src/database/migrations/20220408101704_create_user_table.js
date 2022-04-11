
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
        table.increments();
        table.string('username').notNullable();
        table.text('password').notNullable();
        table.text('token');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
