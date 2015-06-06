module.exports = function() {
  var controller = {};

  var ID_CONTATO_INC = 3;

  var contatos = [
    {_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
    {_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
    {_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
  ];

  controller.listaContatos = function(req, res) {
    res.json(contatos);
  };

  controller.obtemContato = function(req, res) {
    var idContato = req.params.id;
    var contato = contatos.filter(function(contato) {
     return contato._id == idContato;
    })[0];

    if(contato)
      res.json(contato);
    else
      res.status(404).send('404: Contato não encontrado');

  };

  controller.salvaContato = function(req, res) {
    /* Obtém acesso ao corpo da mensagem, nesse caso
    o objeto contato passado na requisição POST */
    var contato = req.body;
    /* contato recebe o resultado da função atualiza() caso
    contato._id tenha um id, caso contrário recebe o resultado
    da função adiciona() */
    contato = contato._id ? atualiza(contato) : adiciona(contato);
    res.json(contato);
  };

  function adiciona(contatoNovo) {
    contatoNovo._id = ++ID_CONTATO_INC;
    contatos.push(contatoNovo);
    return contatoNovo;
  }

  function atualiza(contatoAlterado) {
    contatos = contatos.map(function(contatoExistente) {
      if(contatoExistente._id == contatoAlterado._id) {
        contatoExistente = contatoAlterado;
      }
      return contatoExistente;
    });
  }

  controller.removeContato = function(req, res) {
    /* Obtém o id do contato a ser removido */
    var idContato = req.params.id;
    /* retorna a lista de contatos sem o contato que
    tem o id passado na requisição após a aplicação
    do filtro */
    contatos = contatos.filter(function(contato) {
      return contato._id != idContato;
    });
    res.status(204).end();
  };

  return controller;
};