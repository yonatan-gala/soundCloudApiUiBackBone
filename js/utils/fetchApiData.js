define([
    'utils/constants',
    'soundCloud_sdk'
], function (C,SC) {
    const initialize = function () {
        SC.initialize({
            client_id: C.API_ID
        });
    };

    const getSongs = function (queryString) {
        return SC.get('/tracks', {
            q: queryString, license: 'cc-by-sa'
        });
    };

    return {
        initialize,
        getSongs
    }
});
