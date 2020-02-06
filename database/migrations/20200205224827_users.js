
exports.up = function(knex) {
    return knex.schema.createTable('users', users=> {
        users.increments()
        users.string('firebase_id').notNullable().unique()
        users.string('email').notNullable()
        users.string('name').notNullable()
        users.string('image_url').notNullable()
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
