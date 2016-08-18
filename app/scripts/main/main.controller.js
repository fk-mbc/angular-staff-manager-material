'use strict';

/**
 * @ngdoc function
 * @name staffManagerApp.controller:MainCtrl
 * @description
 * # AboutCtrl
 * Controller of the staffManagerApp
 */
angular
  .module('staffManagerApp')
  .controller('MainCtrl', function ($http, apiReadyService, loadingIndicatorService, $timeout) {
    var ctrl = this;
    ctrl.getPhones = function () {
      loadingIndicatorService.startLoading();

      $http.get('/api/users').then(function (response) {
        ctrl.users = response.data;

        //$timeout(function () {
          loadingIndicatorService.stopLoading();
       // }, 2000);

      }, function (error) {
        console.log(error);
      });

    };

    apiReadyService.isReadyPromise.then(function () {
      ctrl.getPhones();
    });
  });
