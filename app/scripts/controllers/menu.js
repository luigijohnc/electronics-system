'use strict';

/**
 * @ngdoc function
 * @name greenApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the greenApp
 */
angular.module('greenApp')
    .controller('MenuCtrl', function($scope, $location) {
    	$scope.isActive = function(route) {
            return route === $location.path();
        };

        $scope.menuItems = [{
            link: 'home',
            title: 'Home',
            className: '',
            icon: 'home'
        }, {
            link: 'about',
            className: 'about',
            title: 'About Us',
            icon: 'event_note'
        }, {
            link: 'products',
            title: 'Products',
            className: 'products',
            icon: 'directions_boat'
        }, {
            link: 'system',
            title: 'System Configuration',
            className: 'system',
            icon: 'cast'
        }, {
            link: 'contact',
            title: 'Contact Us',
            className: 'contact',
            icon: 'cast'
        }];
    });
