/**
 * Created by bjedrzejewski on 05/10/2015.
 */

angular.module('dataControllers', ['quandlServices'])
    .controller('DataListCtrl', ['DatasetsList', function (DatasetsList) {
        var that = this;

        var dataSetRetriever = function () {
            DatasetsList.get({perPage: 12, page: 1}, function (datasetList) {
                that.dataSets = datasetList.datasets;

                $('#quandl-div').bind('DOMSubtreeModified', function () {
                    $(document).foundation('reflow');
                });
            });
        };

        dataSetRetriever();


    }]);