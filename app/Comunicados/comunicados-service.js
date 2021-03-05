'use strict';

angular.module('comunicadosPage').factory('ComunicadosService', ComunicadosService);
ComunicadosService.$inject = ['$http'];

function ComunicadosService($http) {
    return {
        listarComunicados: listarComunicados,
    };
    function listarComunicados() {
        return $http.get("http://softhouse-com.umbler.net/apartamentos");
    };
}

