(function (angular) {

  'use strict';

  /**
   * @class devStorageService
   * @classdesc My service
   * @ngInject
   */
  var devStorageService = function ($filter, $http, $q) {
    // Table schema setup
    var models = {
      tables: {},
      protected: {},
      init: false
    };

    models.defer = $q.defer();
    models.promise = models.defer.promise;

    // Storage
    var database = {
      users: [],
      companies: [],
      jobtitles: []
    };

    var initData = function () {
      var initDefer = models.defer;

      $http.get('data/models.json')
        .then(function (response) {
          var data = response.data;

          for (var propertyName in data[0]) {
            models.tables[propertyName] = data[0][propertyName];
          }

          for (var propertyName in data[1]) {
            models.protected[propertyName] = data[1][propertyName];
          }

          return $http.get('data/users.json');

        }, function (error) {
          console.log(error);
        })
        .then(function (response) {
          database.users = response.data;

          var companies = database.users.reduce(function (carry, item) {
            carry[item.company] = item.company;
            return carry;
          }, {});

          var companyId = 1;
          for (var company in companies) {
            database.companies.push({
              id: companyId++,
              name: company,
              created: '2015-04-11 11:50:00',
              updated: '2015-04-11 11:50:00',
              techversion: 0
            });
          }

          var jobtitles = database.users.reduce(function (carry, item) {
            carry[item.jobtitle] = item.jobtitle;
            return carry;
          }, {});

          var jobtitleId = 1;
          for (var jobtitle in jobtitles) {
            database.jobtitles.push({
              id: jobtitleId++,
              name: jobtitle,
              created: '2015-04-11 11:50:00',
              updated: '2015-04-11 11:50:00',
              techversion: 0
            });
          }

          initDefer.resolve();
          models.init = true;
        }, function (error) {
          console.log(error);
        });

      return models.promise;
    };

    // Public API
    return  {
      /**
       * @name select
       * @param {string} tableName Should be the name of the table (e.g. users)
       * @param {object} where Should be an object like {name: 'John', company: 'mic'}
       * @param {array} orderBy Should be an array like ['company', 'name']
       * @param {array, number} limit Should be an array of numbers like [2, 20] oder a number like 10
       * @returns {object}
       */
      select: function (tableName, where, orderBy, limit) {
        var results = $filter('filter')(database[tableName], where);

        if (orderBy) {
          var reverse = false;
          results = $filter('orderBy')(results, orderBy, reverse);
        }

        if (Array.isArray(limit)) {
          results = results.slice(limit[0], limit[1]);
        } else if (limit === parseInt(limit)) {
          results = results.slice(parseInt(limit));
        }

        return results;
      },
      delete: function (tableName, where, limit) {

      },
      update: function (object, tableName, where, limit) {

      },
      create: function (object, tableName) {

      },
      initData: initData,
      inited: function () {
        return models.init;
      },
      readyPromise: models.promise
    };
  };

  devStorageService.$inject = ['$filter', '$http', '$q'];

  angular
    .module('staffManagerAppDev')
    .factory('devStorageService', devStorageService);

})(angular);