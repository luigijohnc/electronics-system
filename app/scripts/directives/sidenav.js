/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name greenApp.directive:sidenav
 * @description
 * # sidenav
 */
angular.module('greenApp')
    .directive('sidenav', function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                $(element).sideNav();
            }
        };
    });
