/**
 * Created by bjedrzejewski on 05/10/2015.
 */

angular.module('dataControllers', ['quandlServices'])
    .controller('DataListCtrl', ['DatasetsList', '$routeParams', function (DatasetsList, $routeParams) {
        var that = this;
        that.query = '';
        if($routeParams.query) {
            that.query = $routeParams.query;
        }

        var dataSetRetriever = function () {
            DatasetsList.get({perPage: 12, page: 1, query: that.query}, function (datasetList) {
                that.dataSets = datasetList.datasets;

                $('#quandl-div').bind('DOMSubtreeModified', function () {
                    $(document).foundation('reflow');
                });
            });
        };

        dataSetRetriever();


    }])
    .controller('DataSearchCtrl', ['$location', function ($location) {
        var that = this;
        that.goToQueryPage = function(keyEvent) {
            if (keyEvent.which === 13) {
                $location.url(that.query);
            }
        }
    }]);