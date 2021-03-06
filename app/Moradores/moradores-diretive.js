'use strict';

angular.module("moradoresPage").directive("moradoresPage", function () {
    return {
        restrict: "E",
        scope: {
            morador: '='
        },
        templateUrl: "Moradores/moradores-tpl.html",
        link: function (scope) {

        }
    };
})