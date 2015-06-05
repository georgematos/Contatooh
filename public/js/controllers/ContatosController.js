angular.module('contatooh').controller('ContatosController', function($scope, $resource) {

  $scope.contatos = [];

  $scope.filtro = '';

  function buscaContatos() {
    $resource('/contatos').query(
      // Success Callback
      function(data) {
        $scope.contatos = data;
      },
      // Error Callback
      function(erro) {
        console.log("Não foi possível obter a lista de contatos");
        console.log(erro);
      }
    );
  }

  $scope.init = function() {
    buscaContatos();
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