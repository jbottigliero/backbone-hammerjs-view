/**
 * Backbone.HammerJSView
 * 
 * (c) 2015 Joe Bottigliero
 * Backbone.HammerJSView may be freely distributed under the MIT license.
 */
(function(root, factory){
    if (typeof define === 'function' && define.amd) {
      define(['underscore', 'backbone'], factory);
    } else {
      factory();
    }
}(this, function(){
  
  'use strict';

  var hammerViewOptions = ['hammerjs'];

  Backbone.HammerJSView = function(options) {
    _.extend(this, _.pick(options, hammerViewOptions));
    Backbone.View.prototype.constructor.apply(this, arguments);
  };

  _.extend(
    Backbone.HammerJSView.prototype,
    Backbone.View.prototype,
    {
      /**
       * Options to pass to the jQuery HammerJS plugin (Hammer construct)
       * @type {null|object}
       */
      hammerjs: null,
      /**
       * Extends the functionality of Backbone's internal _setElement method
       * to ensure that HammerJS is enabled on the view's element.
       * @inheirt
       */
      _setElement: function() {
        Backbone.View.prototype._setElement.apply(this, arguments);
        this.$el.hammer(this.hammerjs || {});
      }
    }
  );

}));