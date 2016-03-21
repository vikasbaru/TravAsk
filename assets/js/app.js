var app = angular.module('travask', ['firebase', 'ngRoute', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
      .when('/hotels', {
        templateUrl: 'views/hotels.html'
      })
      .when('/cabs', {
        templateUrl: 'views/cabs.html'
      })
      .when('/details', {
        templateUrl: '/views/details.html',
        controller: 'detailsCtrl'
      })
      .when('/packages', {
        templateUrl: '/views/packages.html'/*,
        controller: 'packagesCtrl'*/
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

app.animation('.reveal-animation', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      element.fadeIn(10, done);
      return function() {
        element.stop();
      }
    },
    leave: function(element, done) {
      element.fadeOut(10, done)
      return function() {
        element.stop();
      }
    }
  }
});

app.constant('FirebaseUrl', 'https://travask.firebaseio.com/');


// this factory returns a synchronized array of chat messages
app.factory("packages", ["$firebaseArray",
  function($firebaseArray) {
    var ref = new Firebase("https://travask.firebaseio.com/packages/");

    // this uses AngularFire to create the synchronized array
    return $firebaseArray(ref);
  }
]);

app.controller("detailsCtrl", ["$scope", function($scope){
  $scope.pageClass = 'page-details';
  
}]);

app.controller("homeCtrl", ["$scope", "packages", function($scope, packages){
  $scope.pkgs = packages;

    // if the messages are empty, add something for fun!
    $scope.pkgs.$loaded(function() {
      if ($scope.pkgs.length != 0) {
          console.log($scope.pkgs);
          //$scope.pkgs.replace("1n2d", "1 Night / 2 Days");
      }
    });
  }
]);

app.directive('directive', function($timeout) {
    return {
       link: function(scope, element, attr) {
          $timeout(function() {
             initOwl();
             initScripts();
             $('#preloader').fadeOut('slow',function(){$(this).remove();});
          });
       }
    }
});

        
