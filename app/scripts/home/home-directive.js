angular.module("softhouse").directive("homeTpl", function () {
    return {
        restrict: "E",
        scope: {
            comunicado: '=',
        },
        templateUrl: "scripts/home/home-tpl.html",
        link: function (scope, element, attr) {
            element.addClass('filme com-cartaz');

            if (!attr.fnFechar) {
                element.find('button').remove();
            }
        }
    };
})