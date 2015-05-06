'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('Post', ['$resource', function($resource) {
    return $resource('api/v1/posts/:id',
      { id: '@id'},{
        query:    { method:'GET', isArray:true },
        update:   { method:'PUT'},
        remove:   { method:'DELETE'},
        create:     { method:'POST'}
      }
    );
  }]);
