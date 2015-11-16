'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'dataControllers',
    'dataDetailsControllers',
    'dataListDirectives'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'list/data-list.html',
            controller: 'DataListCtrl',
            controllerAs: 'dataCtrl'
        })
        .when('/stock/:code', {
            templateUrl: 'details/data-details.html',
            controller: 'DataDetailsCtrl',
            controllerAs: 'detailsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
