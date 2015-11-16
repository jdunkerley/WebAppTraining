/**
 * Created by bjedrzejewski on 16/11/2015.
 */

angular.module('dataDetailsControllers', ['quandlServices'])
    .controller('DataDetailsCtrl', ['$routeParams', 'DataDetails', function ($routeParams, DataDetails) {
        var that = this;
        that.rparam = $routeParams.code;

        var detailsRetriever = function () {
            DataDetails.get({code: that.rparam}, function (stockDetails) {
                that.details = stockDetails;

                // Create the chart
                $('#container').highcharts('StockChart', {
                    rangeSelector : {
                        selected : 1
                    },

                    title : {
                        text : that.rparam + ' Stock Price'
                    },

                    series : [{
                        name : that.rparam,
                        data : stockDetails.dataset_data.data.reverse().map(function(obj){
                            var rObj = [obj[0],obj[11]];

                            return rObj;
                        }),
                        tooltip: {
                            valueDecimals: 2
                        }
                    }]
                });
            });
        };

        detailsRetriever();


    }]);