'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('PostsIndexController', ['$scope', 'Posts', function($scope, Posts) {
    $scope.posts = Posts.index()
  }])
  .controller('MyCtrl2', [function() {

  }]);
