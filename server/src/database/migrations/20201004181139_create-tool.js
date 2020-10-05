
exports.up = function(knex) {
    return knex.schema.createTable('tools', (table)=>{
        table.increments('id').primary();
        table.string('titleT').notNullable();
        table.string('descriptionT').notNullable();
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('tools');
};
