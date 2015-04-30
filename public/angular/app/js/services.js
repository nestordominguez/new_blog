'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('Posts', ['$resource', function($resource) {
    return $resource('posts/:id', {id: '@id'}, {
      index:   { method: 'GET', isArray: true, responseType: 'json' }
    });
  }]);
