const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  //lista ongs
  async index (resquest, response) {
    const ongs = await connection('ongs').select('*');
 
    return response.json(ongs);
 },

  async create(request, response){
  //pegando dados do corpo da requisição. Utilizando desestruturação, jogando os campos nas variaveis.
  const { name, email, whatsapp, city, uf } = request.body;
  
  //gerando id aleatorio com 4 bytes e convertando no tipo string hexadecimal.
  const id = crypto.randomBytes(4).toString('HEX');

  //inserindo dados ta tabela ongs
  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  })

     return response.json({ id });
  }
};