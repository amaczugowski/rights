// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    })
    .state('general', {
      url: '/general',
      templateUrl: 'templates/general.html',
      controller: 'GeneralCtrl'
    })
    .state('walk', {
      url: '/walk',
      templateUrl: 'templates/walk.html',
      controller: 'WalkCtrl'
    })
    .state('car', {
      url: '/car',
      templateUrl: 'templates/car.html',
      controller: 'CarCtrl'
    })
    .state('house', {
      url: '/house',
      templateUrl: 'templates/house.html',
      controller: 'HouseCtrl'
    })
    .state('arrested', {
      url: '/arrested',
      templateUrl: 'templates/arrested.html',
      controller: 'ArrestedCtrl'
    })
    .state('immigration', {
      url: '/immigration',
      templateUrl: 'templates/immigration.html',
      controller: 'ImmigrationCtrl'
    })
    .state('custody', {
      url: '/custody',
      templateUrl: 'templates/custody.html',
      controller: 'CustodyCtrl'
    })
    .state('rights', {
      url: '/rights',
      templateUrl: 'templates/rights.html',
      controller: 'RightsCtrl'
    })
    .state('bill', {
      url: '/bill',
      templateUrl: 'templates/bill.html',
      controller: 'BillCtrl'
    });

  $urlRouterProvider.otherwise('/main');
});
