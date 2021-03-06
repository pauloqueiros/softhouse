'use strict';

angular.module('moradoresPage').factory('MoradoresService', MoradoresService);
MoradoresService.$inject = ['$http'];

function MoradoresService($http) {
    return {
        listarMoradores: listarMoradores,
    };
    function listarMoradores() {
        return $http.get("http://softhouse-com.umbler.net/apartamentos");
    };
}

