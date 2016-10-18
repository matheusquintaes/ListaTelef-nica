 angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function ($scope, $http,contatosAPI, operadorasAPI){
        $scope.app        = "Teste";
        $scope.contatos   = [];
        $scope.operadoras = [];

        pageload();

        function pageload() {
          $scope.contatos   = contatosAPI.getContatos();
          $scope.operadoras = operadorasAPI.getOperadoras();
        }

        $scope.adicionarContato = function(contato){
          contatosAPI.saveContato(contato);
          delete $scope.contato;
        }

        $scope.apagarContatos = function (contatos){
          $scope.contatos = contatos.filter(function (contato){
            if(!contato.selecionado){
              return  contato;
            }
          })
        }

        $scope.isContatoSelecionado = function(contatos){
          return contatos.some(function(contato){
            return contato.selecionado;
          })
        }
        $scope.ordernarPor = function(campo){
          $scope.criterioDeOrdenacao = campo;
          $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        }
      });