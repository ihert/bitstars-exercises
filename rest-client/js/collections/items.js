define([
    'underscore',
    'backbone',
    'models/item'
], function(_, Backbone, Item){

    var ItemsCollection = Backbone.Collection.extend({
    });

    return new ItemsCollection;
});
