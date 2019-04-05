
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('inventory', (table)=>{
          table.increments('id').primary();
          table.string('name');
          table.integer('price');
          table.string('description1',1000);
          table.string('description2',500);
          table.string('imageurl');
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('inventory')
    ])
};
