'use strict';

/**
 * @ngdoc overview
 * @name staffManagerApp
 * @description
 * # staffManagerApp
 *
 * Main module of the application.
 */
angular
  .module('staffManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/main.template.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'scripts/about/about.template.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('orange');
  });
