define(
    [
        'underscore',
        'jquery',
        'backbone',
        'search/search.model'

    ], function (underscore, $, Backbone, SearchModel) {

        return Backbone.View.extend({
                el: $('#search'),

                initialize: function () {
                    this.searchModel = new SearchModel();
                    this.render();
                },

                events: {
                    'click #submit_search': 'handleSearchSubmit'
                },

                manageSearchResult: function (r) {
                    this.searchModel.processSearchInput(r);
                },

                handleSearchSubmit: function () {
                    const q = this.$el.find('#input_search').val();
                    this.manageSearchResult(q);
                },

                render: function () {
                    this.$el.html(` <input id="input_search" type="text" class="input" placeholder="{{search}}">
                                    <button id="submit_search" class="btn">{{submit}}</button>`);
                },
            }
        );
    });