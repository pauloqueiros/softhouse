'use strict';

angular
	.module('moradoresPage')
	.controller('MoradoresController', MoradoresController);

	MoradoresController.$inject = ['$scope', 'MoradoresService'];

function MoradoresController($scope, MoradoresService) {
	var vm = this;
	vm.moradores = [];
	vm.arrayMoradores = [];
	vm.init = init;
	vm.listarMoradores = listarMoradores;
	init();

	function init() {
		listarMoradores();
	}

	function listarMoradores() {
		MoradoresService.listarMoradores().then(function (data) {
				vm.moradores = data.data[0];
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
