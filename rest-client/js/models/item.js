define([
	'underscore', 
	'backbone'
], function(_, Backbone) {

    var ItemModel = Backbone.Model.extend({

        url: 'http://2-dot-crowdev-template.appspot.com/v1/tests/',

        methodUrl:  function(method){

            if(method == "delete"){
                return this.url + this.attributes.id;
            } else if(method == "update" || method == "create"){
                return this.url;
            }
        },

        sync: function(method, model, options) {

            if (model.methodUrl && model.methodUrl(method.toLowerCase())) {
                options = options || {};
                options.url = model.methodUrl(method.toLowerCase());
            }
            Backbone.sync(method, model, options);
        }
    });

    return ItemModel;
});
