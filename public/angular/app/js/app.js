'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/posts', {
    templateUrl: 'partials/post/index.html',
    controller: 'PostsIndexController'
  });
  $routeProvider.when('/posts/show/:postId', {
    templateUrl: 'partials/post/show.html',
    controller: 'PostShowController'
  });
  $routeProvider.when('/posts/create', {
    templateUrl: 'partials/post/create.html',
    controller: 'PostCreateController'
  });
  $routeProvider.otherwise({redirectTo: '/posts'});
}]);
