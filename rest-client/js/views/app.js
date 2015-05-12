define([
    'jquery',
    'underscore',
    'backbone',
    'views/item'
], function($, _, Backbone, ItemView){

    var AppView = Backbone.View.extend({

        el: '#app',

        initialize: function() {
            // cache elements from the view
            this.$input = this.$('#add');
            this.$list = $('#item-list');

            this.listenTo(this.collection, 'add', this.renderOne);
            // automatically re-render whenever the collection is populated
            this.listenTo(this.collection, 'reset', this.renderAll);

            this.collection.fetch();
        },

        // render one item from collection
        renderOne: function(item) {
            console.log('renderOne');
            var view = new ItemView({model:item});
            this.$list.append(view.render().el);
        },

        renderAll: function () {
            console.log('renderAll');
            this.collection.each(this.renderOne, this);
        }
    });

    return AppView;
});
