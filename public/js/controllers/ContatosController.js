angular.module('contatooh').controller('ContatosController', function($scope, Contato) {

  $scope.contatos = [];

  $scope.filtro = '';

  $scope.mensagem = {texto: ''};

  var buscaContatos = function() {
    Contato.query(
      // Success Callback
      function(data) {
        $scope.contatos = data;
      },
      // Error Callback
      function(erro) {
        console.log(erro);
        $scope.mensagem.texto = "Não foi possível obter a lista";
      }
    );
  };

  $scope.init = function() {
    buscaContatos();
  };

  $scope.remove = function(contato) {
    Contato.delete({id: contato._id},
      function() { // success
        buscaContatos();
        if($scope.mensagem) {
          $scope.mensagem.texto = "";
        }
      },
      function(erro) { // error
        console.log(erro);
        $scope.mensagem.texto = "Não foi possível remover o contato";
      });
  };

  $scope.init();

  /* Consulta usando $http */
  // $http.get('/contatos')
  //   .success(function(data) {
  //     $scope.contatos = data;
  //   }).error(function(statusText, status) {
  //     console.log("Não foi possível obter a lista de contatos");
  //     console.log(statusText);
  //     console.log(status);
  //   });

});