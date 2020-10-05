
exports.up = function(knex) {
  return knex.schema.createTable('themes', (table)=>{
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('description').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('themes')
};
