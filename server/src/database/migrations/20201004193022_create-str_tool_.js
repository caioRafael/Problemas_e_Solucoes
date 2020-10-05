
exports.up = function(knex) {
    return knex.schema.createTable('str_tools', (table)=>{
        table.increments('id').primary();
        table.integer('id_s').references('id').inTable('strategy');
        table.integer('id_t').references('id').inTable('tools');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('str_tools');
  };
  