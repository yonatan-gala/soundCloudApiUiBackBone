define([
    'underscore',
    'backbone',
    'utils/fetchApiData',
    'search/search.view',
    'tracks/tracks.view',
], function (_, backbone, FetchApiData, SearchView, TracksView) {

    var initialize = function () {
        FetchApiData.initialize();
       // this.tracksView = new TracksView();
        this.searchView = new SearchView();

    };

    return {
        initialize: initialize
    }
});
