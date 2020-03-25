const knex = require('knex');
const configuration = require('../../knexfile');

//conexão com as configurações de dev do aequivo knexfile
const connection = knex(configuration.development);

//exportando conexão
module.exports = connection;