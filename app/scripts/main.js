require([
    'backbone',
    'application',
    'regionManager',
    'routers/router'
],
function (Backbone, App) {
    'use strict';

    Backbone.history.start();

    App.start();
});
