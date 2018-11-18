define(
    [
        'underscore',
        'jquery',
        'backbone',
        'tracks/tracks.model'

    ], function (underscore, $, Backbone, TrackModel) {

        return Backbone.View.extend({
                el: $('#results'),

                initialize: function () {
                    this.tracksModel = new TrackModel();
                    this.render();
                },

                events: {},

                test: function (somthing) {
                    console.log(somthing);
                },

                render: function () {
                    this.$el.html();
                }
            }
        );
    });