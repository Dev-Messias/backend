const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    //buscando id atraves do corpo da requisição
    const { id } = request.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

      //se a ong não existir. 400 alguma coisa deu errado.
      if (!ong) {
        return response.status(400).json({ error: 'No ONG found with this ID'});

      }
      // se tudo deu certo retornar dados da ong
      return response.json(ong);
  }
}