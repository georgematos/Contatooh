/* O arquivo express.js contém o código do módulo
de configuração do Express */


/* A variável express armazena uma função que,
ao ser chamada, retorna uma instância do express: */
var express = require('express');

/* Importa o módulo de rotas */
var home = require('../app/routes/home');

/* O objeto module está disponível implicitamente
em cada módulo, tudo que for adicionado em sua
propriedade exports estará disponível fora do
módulo */
module.exports = function() {

  var app = express();

  // Configura a variável de ambiente port para 3000
  app.set('port', 3000);

  /* O Middleware static Faz com que o conteúdo da
  pasta public esteja acessível ao usuário através
  do navegador */
  app.use(express.static('./public'));

  /* Ativa o controle de rotas do express. Necessário
  somente na versão 3.x */
  // app.use(app.router);

  /* Configura a view engine utilizada no app */
  app.set('view engine', 'ejs');

  /* Define o diretório onde ficarão as views */
  app.set('views', './app/views');

  home(app);

  return app;

};