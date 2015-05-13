define([
    'underscore',
    'backbone',
    'models/item'
], function(_, Backbone, Item){

    var ItemsCollection = Backbone.Collection.extend({

        url: 'http://2-dot-crowdev-template.appspot.com/v1/tests/',

        model: Item
    });

    return new ItemsCollection;
});
