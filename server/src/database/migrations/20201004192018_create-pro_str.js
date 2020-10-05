
exports.up = function(knex) {
  return knex.schema.createTable('pro_str', (table)=>{
      table.increments('id').primary();
      table.integer('id_p').references('id').inTable('problems');
      table.integer('id_s').references('id').inTable('strategy');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pro_str');
};
