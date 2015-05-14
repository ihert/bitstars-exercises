define([
    'jquery',
    'underscore',
    'backbone',
    'views/item'
], function($, _, Backbone, ItemView){

    var AppView = Backbone.View.extend({
        // helper vars
        ENTER_KEY : 13,
        ESC_KEY   : 27,

        el: '#app',

        // the DOM events for app
        events: {
            'keypress #add'     : 'onEnter',
            'click #list'       : 'showAsList',
            'click #grid'       : 'showAsGrid',
            'click #sort-asc'   : 'sortAsc',
            'click #sort-desc'  : 'sortDesc'
        },

        initialize: function() {
            // cache elements from the view
            this.$input = this.$('#add');
            this.$list = $('#item-list');

            this.listenTo(this.collection, 'add', this.renderOne);
            // automatically re-render whenever the collection is populated
            this.listenTo(this.collection, 'reset', this.renderAll);
            this.listenTo( this.collection, 'sort', this.renderAll);

            this.collection.fetch();
        },

        // render one item from collection
        renderOne: function(item) {
            var view = new ItemView({model:item});
            this.$list.append(view.render().el);
        },

        renderAll: function () {
            this.$list.empty();
            this.collection.each(this.renderOne, this);
        },

        // create new item per ENTER key
        onEnter: function (e) {
            if (e.which === this.ENTER_KEY) {
                var newItem = this.$input.val();
                this.collection.create({name: newItem});
                this.$input.val('');
            }
        },

        // sort collection in ascending order
        sortAsc: function () {
            this.collection.sortAsc = true;
            this.collection.sort();
        },

        // sort collection in descending order
        sortDesc: function () {
            this.collection.sortAsc = false;
            this.collection.sort();
        },

        showAsList: function () {
            $('li').css({'display':'block', 'width':'100%'});
        },

        showAsGrid: function () {
            $('li').css({'display':'inline-block', 'width':'50%'});
        }
    });

    return AppView;
});
