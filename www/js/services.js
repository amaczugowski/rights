angular.module('starter.services', ['ionic'])

.factory('Shared', [function() {
  var data = {};

  data.barStyle = 'bar-calm';

  return data;
}]);
