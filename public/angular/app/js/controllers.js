'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('PostsIndexController', ['$scope', '$location', 'Post',
    function($scope, $location, Post) {
    $scope.posts = Post.query();
    $scope.update = function(post) {
      post.$update();
    };
    $scope.delete = function(post) {
      post.$remove();
      $scope.posts = Post.query();
    };
    $scope.create = function () {
      $location.path('/posts/create');
    };
    $scope.reset = function(post) {
      post.comment = "";
      post.$update();
      $location.path('/posts');
    }
  }])
  .controller('PostShowController', ['$scope', '$routeParams', '$resource', 'Post',
    function($scope, $routeParams, $resource, Post) {
      $scope.id = $routeParams.postId;
      $scope.post = Post.get({id: $scope.id}, function(post) {
        $scope.comment = post.comment;
      });
  }])
  .controller('PostCreateController', ['$scope', '$resource', '$location','Post',
    function($scope, $resource, $location, Post) {
      $scope.createNewPost = function(post) {
        Post.create($scope.post);
        $location.path('/posts');
      };
      $scope.cancel = function() {
        $location.path('/posts');
      }
  }]);
