'use strict';

angular.
  module('softhouseApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          templateUrl: 'Home/home-tpl.html',
          controller: 'HomeController as vm'
        }).
        when('/comunicados', {
          templateUrl: 'Comunicados/comunicados-tpl.html',
          controller: 'ComunicadosController as vm'
        }).
        when('/moradores', {
          templateUrl: 'Moradores/moradores-tpl.html',
          controller: 'MoradoresController as vm'
        }).
        when('/moradores/form', {
          templateUrl: 'Moradores/moradores-form-tpl.html',
          controller: 'MoradoresController as vm'
        }).
        otherwise('/comunicados');
    }
  ]);
