module.exports = function(app) {

  var controller = app.controllers.contato;

  /* Anterior a versão 4 do Express */
  // app.get('/contatos', controller.listaContatos);
  // app.get('/contatos/:id', controller.obtemContato);
  // app.delete('/contatos/:id', controller.removeContato);

  /* A partir da versão 4 do Express*/
  app.route('/contatos')
    .get(controller.listaContatos)
    .post(controller.salvaContato);

  app.route('/contatos/:id')
    .get(controller.obtemContato)
    .delete(controller.removeContato);
};