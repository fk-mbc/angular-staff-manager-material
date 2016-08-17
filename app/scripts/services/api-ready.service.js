(function (angular) {

  'use strict';

  /**
   * @class apiReadyService
   * @classdesc My service
   * @ngInject
   */
  var apiReadyService = function (devStorageService) {

    return  {
      isReady: function () {
        return devStorageService.inited();
      },
      isReadyPromise: devStorageService.readyPromise
    };
  };

  apiReadyService.$inject = ['devStorageService'];

  angular
    .module('staffManagerApp')
    .factory('apiReadyService', apiReadyService);

})(angular);