(function (angular) {

  'use strict';

  /**
   * @class loadingIndicatorService
   * @classdesc My service
   * @ngInject
   */
  var loadingIndicatorService = function () {
    var api = {
      isLoading: false,
      startLoading: function () {
        api.isLoading = true;
      },
      stopLoading: function () {
        api.isLoading = false;
      },
      toggle: function () {
        api.isLoading = !api.isLoading;
      }
    };

    return api;
  };

  loadingIndicatorService.$inject = [];

  angular
    .module('staffManagerAppDev')
    .factory('loadingIndicatorService', loadingIndicatorService);

})(angular);