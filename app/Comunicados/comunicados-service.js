'use strict';

angular.module('comunicadosPage').factory('ComunicadosService', ComunicadosService);
ComunicadosService.$inject = ['$http'];

function ComunicadosService($http) {
    return {
        listarComunicados: listarComunicados,
    };
    function listarComunicados() {
        return $http.get("https://softhouse-d90d8.firebaseio.com/comunicados.json");
    };
}

