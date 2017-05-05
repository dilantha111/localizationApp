'use strict';

angular.
  module('hotelApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<home></home><bottom></bottom>'
        }).
        when('/takeAway', {
          template: '<takeaway></takeaway><bottom></bottom>'
        }).
        when('/cakes', {
          template: '<cakes></cakes><bottom></bottom>'
        }).
        when('/weddingHalls', {
          template: '<weddinghalls></weddinghalls><bottom></bottom>'
        }).
        when('/aboutUs', {
          template: '<aboutus></aboutus><bottom></bottom>'
        }).
        otherwise('/');
    }
  ]);
