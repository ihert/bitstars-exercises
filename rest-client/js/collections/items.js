define([
    'underscore',
    'backbone',
    'models/item'
], function(_, Backbone, Item){

    var ItemsCollection = Backbone.Collection.extend({

        url: 'http://2-dot-crowdev-template.appspot.com/v1/tests/',

        model: Item,

        sortAsc: true,
        
        comparator: function (item) {
            if(this.sortAsc) {
                return  item.get('name');
            } else {
                var str = item.get('name');
                str = str.toLowerCase();
                str = str.split('');
                str = _.map(str, function(letter) {
                    return String.fromCharCode(-(letter.charCodeAt(0)));
                });
                return str;
            }
        }
    });

    return new ItemsCollection;
});
