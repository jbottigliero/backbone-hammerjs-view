/**
 * Backbone.HammerJSView
 */

(function(root, factory){
    if (typeof define === 'function' && define.amd) {
      define(['underscore', 'backbone'], factory);
    } else {
      factory();
    }
}(this, function(){
  
  'use strict';

  Backbone.HammerJSView = Backbone.View.extend({
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
  });

}));