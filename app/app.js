'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'dataControllers',
    'dataListDirectives'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'list/data-list.html',
        controller: 'DataListCtrl',
        controllerAs: 'dataCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
