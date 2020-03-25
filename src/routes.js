//Importando o express
const express = require('express');
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');
//Colocando o modulo de rotas do express em uma variavel.
const routes = express.Router();

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: BUscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados e enviados na rota apos "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Resquest Body: corpo da requisição, utilizado para criar ou alterar recurso
   */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
routes.post('/sessions', SessionController.create);

 //listando todas as ongs
 routes.get('/ongs', OngController.index);

//criando conteudo rota principal
//passando função como segundo parametro
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);


routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


//exportando variavel de dentro do arquivo, para utilizar em outro.
module.exports = routes;
