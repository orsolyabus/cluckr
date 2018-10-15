
exports.up = function (knex, Promise) {
  return knex.schema.createTable('tags', table => {
    table.increments("id");
    table.string('tag');
    table.integer('count')

  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("tags");
};
