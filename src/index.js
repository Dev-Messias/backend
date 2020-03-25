//importando todas as funções do express
// para a variavel express
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // => importando variavel routes, do arquivo routes.

//variavel para armazenar a aplicação
const app = express();

app.use(cors());

/**
 * Informando para o app que vamos utilizado formato json para as requisições.
 * Antes da requisição ele converte o arquivo em json. Por isso esse comando tem que vir antes.
 */
app.use(express.json());

//utilizando arquivo importado.
app.use(routes);

//variavel vai ouvir a porta 3333
//para quando acessar localhost3333 eu poder acessar a variavel app.
app.listen(3333);

