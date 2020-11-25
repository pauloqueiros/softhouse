'use strict';

angular.module('comunicadosPage').factory('ComunicadosService', ComunicadosService);
ComunicadosService.$inject = ['$http','$q'];

function ComunicadosService($http,$q) {
    return {
        listarComunicados: listarComunicados,
    };
    function listarComunicados() {
        var promessa = $q.defer();
        return $http.get("https://softhouse-d90d8.firebaseio.com/comunicados.json").then(function (result) {
                var comunicado = [];

                angular.forEach(result.data, function (comunicado, id) {
                    comunicado.id = id;
                    comunicado.push(comunicado);
                });
                promessa.resolve(comunicado);
        });
    }
}
