
exports.up = function(knex) {
    return knex.schema.createTable('problems', (table)=>{
        table.increments('id').primary();
        table.string('titleP').notNullable();
        table.string('descriptionP').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('problems')
  };