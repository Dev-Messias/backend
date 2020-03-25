
exports.up = function(knex) {
  //criando tabela
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();//nome não pode ser nulo
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  //desfazer se ouver algum problema "deletar tb"
  return knex.schema.dropTable('ongs');
  
};
