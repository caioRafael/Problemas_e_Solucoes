
exports.up = function(knex) {
    return knex.schema.createTable('pro_themes', (table)=>{
        table.increments('id').primary();
        table.integer('id_p').references('id').inTable('problems');
        table.integer('id_t').references('id').inTable('themes');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('pro_themes')
  };