/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name greenApp.directive:parallax
 * @description
 * # parallax
 */
angular.module('greenApp')
  .directive('parallax', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        $(element).parallax();
      }
    };
  });
