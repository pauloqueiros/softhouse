'use strict';

angular.module("comunicadosPage").directive("comunicadosPage", function () {
    return {
        restrict: "E",
        scope: {
            comunicado: '='
        },
        templateUrl: "Comunicados/comunicados-tpl.html",
        link: function (scope) {

        }
    };
})