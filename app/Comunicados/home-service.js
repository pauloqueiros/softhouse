(function () {
    'use strict';

    angular.module('softhouseApp').factory('ComunicadosService', ComunicadosService);
    ComunicadosService.$inject = ['$http'];

    function ComunicadosService($http) {
        return {
            listarComunicados: function () {
                $http.get("https://softhouse-d90d8.firebaseio.com/comunicados.json").then(function (res) {
                    return res;
                });
            },
        }
    }

})();