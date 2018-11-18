define(
    [
        'underscore',
        'jquery',
        'backbone',
        'utils/fetchApiData'
    ], function (underscore, $, Backbone, FetchApiData) {

        return Backbone.Model.extend({
                initialize: function () {
                    this.searchQueryArray = []; // || get from local;
                },
                getSearchInput: function (q) {
                    this.searchQueryArray.push(q);
                    let tracks = FetchApiData.getSongs(q);
                    console.log('tracks:', tracks);
                },

                processSearchInput: function (q) {
                    this.getSearchInput(q);
                }
            }
        );
    });