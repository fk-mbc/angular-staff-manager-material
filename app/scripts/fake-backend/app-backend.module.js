(function (angular) {

  'use strict';

  /**
   * @class appDevRun
   * @param {service} $httpBackend
   * @param {service} devStorageService
   * @classdesc The run part of the backend mock. It will implement our fake backend.
   * @ngInject
   */
  var AppDevRun = function ($httpBackend, devStorageService) {

    // Don't block static files like html and json
    $httpBackend.whenGET(/\.html$/).passThrough();
    $httpBackend.whenGET(/\.json$/).passThrough();

    // Datastorage
    var database = devStorageService;
    database.initData();

    var phones = [{name: 'phone1'}, {name: 'phone2'}];

    // returns the current list of phones
    $httpBackend.whenGET('/phones').respond(phones);
    $httpBackend.whenGET('/api/users').respond(function () {
      var result = database.select('users', {}, ['lastName']);

      return [200, result];
    });

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/phones').respond(function (method, url, data) {
      var phone = angular.fromJson(data);
      phones.push(phone);
      return [200, phone, {}];
    });
  };

  AppDevRun.$inject = ['$httpBackend', 'devStorageService'];

  angular
    .module('staffManagerAppDev', ['staffManagerApp', 'ngMockE2E'])
    .run(AppDevRun);

})(angular);