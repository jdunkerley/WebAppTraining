
angular.module('dataListDirectives', []).directive('quandlPanel', function(){
    return {
        restrict: 'E',
        scope: {dataset: '='},
        templateUrl: './list/data-panel.html'
    };
});
