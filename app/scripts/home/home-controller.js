(function () {
	angular
		.module('softhouse')
		.controller('HomeController', function ($scope, ComunicadosService) {
			$scope.listarComunicados = listarComunicados;
			listarComunicados();

			function listarComunicados() {
				return ComunicadosService.listarComunicados().then(function (data) {
					$scope.comunicado = data;
				});
			}

			$scope.criarFilme = function () {
				$scope.filmes.push({
					id: SparkMD5.hash(Date.now() + ""),
					titulo: $scope.novoFilme.titulo,
					ano: $scope.novoFilme.ano,
					produtora: $scope.novoFilme.produtora,
					sinopse: $scope.novoFilme.sinopse,
					cartaz: $scope.novoFilme.cartaz
				});

				$scope.novoFilme = {};
			}

			$scope.removerFilme = function (id) {
				angular.forEach($scope.filmes, function (filme, i) {
					if (filme.id == id) {
						$scope.filmes.splice(i, 1);
					};
				});
			}

		});
})();