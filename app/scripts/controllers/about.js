'use strict';

/**
 * @ngdoc function
 * @name greenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the greenApp
 */
angular.module('greenApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
