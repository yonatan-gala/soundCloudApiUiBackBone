"use strict";

/**
 * GLOBAL CONFIGURATION
 */
const DEPENDENCY_PATH = 'lib/';

/**
 * rquuire.js dependency configuration
 */
require.config({
    paths: {
        jquery: DEPENDENCY_PATH + 'jquery-min',
        underscore: DEPENDENCY_PATH + 'underscore-min',
        backbone: DEPENDENCY_PATH + 'backbone-min',
        soundCloud_sdk: 'https://connect.soundcloud.com/sdk/sdk-3.3.0',
        soundCloud_api: 'https://w.soundcloud.com/player/api',
    }
});

define(['app'], function(App){
    App.initialize();
});
