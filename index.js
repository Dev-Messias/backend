//importando todas as funções do express
// para a variavel express
const express = require('express');

//variavel para armazenar a aplicação
const app = express();

//criando conteudo rota principal
//passando função como segundo parametro
app.get('/', (resquest, response) => {
     return response.json({
       evento: 'Semana OmniStack 11.0',
       aluno: 'Messias'
     });
})

//variavel vai ouvir a porta 3333
//para quando acessar localhost3333 eu poder acessar a variavel app.
app.listen(3333);

