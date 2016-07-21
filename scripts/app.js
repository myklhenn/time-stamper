(function() {

  "use strict";

  var App = angular.module("App", [
    "App.controllers",
    "ngRoute"
  ]);

  App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({redirectTo : '/'});

    $locationProvider.html5Mode(true); // Fix urls someday.
  }]);

  console.log("Hello there!");

}());