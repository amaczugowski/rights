angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', ['$scope', 'Shared', function($scope, Shared) {
  $scope.barStyle = Shared.barStyle;
}])

.controller('MainCtrl', ['$scope', 'Shared', function($scope, Shared) {
  $scope.pageInit = function() {
    Shared.barStyle = 'bar-calm';
  };

  $scope.pageInit();
}])

.controller('WalkCtrl', ['$scope', 'Shared', function($scope, Shared) {
  $scope.pageInit = function() {
    Shared.barStyle = 'bar-calm';
  };

  $scope.pageInit();
}])

.controller('CarCtrl', ['$scope', 'Shared', function($scope, Shared) {
  $scope.pageInit = function() {
    Shared.barStyle = 'bar-energized';
  };

  $scope.pageInit();
}])

.controller('HouseCtrl', ['$scope', 'Shared', function($scope, Shared) {
  $scope.pageInit = function() {
    Shared.barStyle = 'bar-calm';
  };

  $scope.pageInit();
}])
