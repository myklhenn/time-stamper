(function() {

  "use strict";

  var App = angular.module("App.controllers", []);


  App.controller("HomeCtrl", ["$scope", "$window", function ($scope, $window){
    $scope.runnings_stamps = [];
    
    $scope.new_stamp = function() {
        var stamp = {
            start_time : new Date(),
            end_time : null,
            title : "",
            description : "",
            tags : [],
            range : false,
            running: true
        };
        
        $scope.runnings_stamps.push(stamp);
    };

    $scope.end_running = function(stamp) {
        stamp.running = false;
        stamp.range = true;
        stamp.end_time = new Date();
    }

    $scope.ignore_running = function(stamp) {
        stamp.running = false;  
    }



  }]);
}());