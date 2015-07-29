'use strict';

/**
 * @ngdoc function
 * @name greenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the greenApp
 */
angular.module('greenApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
