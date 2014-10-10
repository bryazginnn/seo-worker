'use strict';

/* App Module */

var seoApp = angular.module('seoApp', [
    'ngRoute',
    'ngResource',
    'seoControllers',
    'seoServices'

]);

seoApp.config([ '$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/sites', {
                templateUrl: 'partials/sites.html',
                controller: 'SitesCtrl'
            })
            .otherwise({
                redirectTo: '/sites'
            });
    }]);