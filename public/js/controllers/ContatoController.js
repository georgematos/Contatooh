angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, Contato) {

  $scope.mensagem = {texto: ''};

  if($routeParams.contatoId) {
    Contato.get({id: $routeParams.contatoId},
      function(data) {
        $scope.contato = data;
      },
      function(erro) {
        $scope.mensagem.texto = 'Não foi possível obter o contato';
        console.log(erro);
      }
    );
  } else {
    $scope.contato = new Contato();
  }

  $scope.salva = function() {
    $scope.contato.$save()
      .then(function() {
        $scope.mensagem.texto = "Contato salvo com sucesso";
        $scope.contato = new Contato();
      }).catch(function(erro) {
        $scope.mensagem.texto = "Não foi possível salvar o contato";
      });
  };

});