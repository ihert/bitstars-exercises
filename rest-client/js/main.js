// Filename: main.js

// Require.js allows us to configure mappings to paths
// as demonstrated below:
require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone'
    },

    shim: {

        underscore: {
            exports: '_'
        },

        backbone: {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        }
    }

});

require([ 'views/app', 'collections/items' ], function(AppView, AppCollection){
    var app_view = new AppView({
        collection: AppCollection
    });
});
