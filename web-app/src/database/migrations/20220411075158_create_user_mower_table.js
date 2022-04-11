
exports.up = function(knex) {
    return knex.schema.createTable('user_mower', function(table) {
        table.integer('user_id').unsigned().notNullable();
        table.integer('mower_id').unsigned().notNullable();

        table.foreign('user_id')
            .references('user.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.foreign('mower_id')
            .references('mower.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_mower');
};
