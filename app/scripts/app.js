'use strict';

/**
 * @ngdoc overview
 * @name greenApp
 * @description
 * # greenApp
 *
 * Main module of the application.
 */
var app = angular
    .module('greenApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'mainView': {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                }
            }
        })
        .state('about', {
            url: '/about',
            views: {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            }
        })
        .state('products', {
            url: '/products',
            views: {
                templateUrl: 'views/products.html',
                controller: 'ProductsCtrl'
            }
        })
        .state('system', {
            url: '/system_configuration',
            views: {
                templateUrl: 'views/system.html',
                controller: 'SystemCtrl'
            }
        })
        .state('contact', {
            url: '/contact',
            views: {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            }
        });
});
