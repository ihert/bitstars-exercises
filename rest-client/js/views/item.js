define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var ItemView = Backbone.View.extend({
        // helper vars
        ENTER_KEY : 13,
        ESC_KEY   : 27,

        tagName: 'li',

        // cache the template for a single item
        itemTpl: _.template($('#item-tpl').html()),

        // the DOM events for this item
        events: {
            "click .del"      : "clear",
            'keypress .edit'  : 'onEnter',
            'keydown .edit'   : 'onEscape',
            "click p"         : "edit"
        },

        initialize: function() {
            console.log(this.model.id);
            this.listenTo(this.model, 'change', this.render);
            // the view should remove itself in case the model is
            // destroyed via a collection method
            this.listenTo(this.model, 'destroy', this.remove);
        },

        // render this item
        render: function() {
            this.$el.html(this.itemTpl(this.model.toJSON()));
            this.$input = this.$('.edit');
            return this;
        },

        // editing mode
        edit: function () {
            this.$el.addClass('editing');
            this.$input.focus();
        },

        // if you press ENTER leave editing mode
        // and save state
        onEnter: function (e) {
            if (e.which === this.ENTER_KEY) {
                this.close();
            }
        },

        // leave editing mode without saving
        onEscape: function (e) {
            if (e.which === this.ESC_KEY) {
                this.$el.removeClass('editing');
                this.$input.val(this.model.get('name'));
            }
        },

        close: function () {
            this.model.save({name: this.$input.val()});
            this.$el.removeClass('editing');
        },

        // Remove this view from the DOM.
        // Remove event listeners from: DOM, this.model
        remove: function() {
            this.stopListening();
            this.undelegateEvents();
            this.$el.remove();
        },

        // remove the item and destroy the model
        clear: function () {
            this.model.destroy();
        }
    });

    return ItemView;
});
