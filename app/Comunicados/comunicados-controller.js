'use strict';

angular
	.module('comunicadosPage')
	.controller('ComunicadosController', ComunicadosController);

ComunicadosController.$inject = ['$scope', 'ComunicadosService'];

function ComunicadosController($scope, ComunicadosService) {
	var vm = this;
	vm.comunicados = [];
	vm.arrayComunicados = [];
	vm.init = init;
	vm.listarComunicados = listarComunicados;
	init();

	function init() {
		listarComunicados();
	}

	function listarComunicados() {
		ComunicadosService.listarComunicados().then(function (data) {
				vm.comunicados = data.data[0];
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
}
