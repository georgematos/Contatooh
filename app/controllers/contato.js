module.exports = function() {
  var controller = {};

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

  return controller;
};