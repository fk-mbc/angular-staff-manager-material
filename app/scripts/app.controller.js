'use strict';

/**
 * @ngdoc function
 * @name staffManagerApp.controller:AppCtrl
 * @description
 * # AboutCtrl
 * Controller of the staffManagerApp
 */
angular
  .module('staffManagerApp')
  .controller('AppCtrl', function ($location, $mdSidenav) {
    var vm = this;

    vm.navigateTo = function (target) {
      $location.path(target);
      $mdSidenav('left').close();
    };

    vm.toggleSidenav = function () {
      $mdSidenav('left').toggle();
    };
  });
