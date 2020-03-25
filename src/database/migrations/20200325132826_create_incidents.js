
exports.up = function(knex) {
   //criando tabela
   return knex.schema.createTable('incidents', function (table) {
    table.increments();

    table.string('title').notNullable();//nome não pode ser nulo
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    
    table.string('ong_id').notNullable();//relacionamento da tabela ong com a tabela incidents
    table.foreign('ong_id').references('id').inTable('ongs'); //chave estranjeira da tabela 
  });
};

exports.down = function(knex) {
  //desfazer se ouver algum problema "deletar tb"
  return knex.schema.dropTable('incidents');
};
