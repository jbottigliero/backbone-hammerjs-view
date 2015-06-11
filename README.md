# backbone-hammerjs-view
Backbone + Hammer.js

A *basic* [Backbone.View](http://backbonejs.org/#View) extension that enables [HammerJS](http://hammerjs.github.io/) events on a view's element.

### Usage

```javascript

var TapableView = Backbone.HammerJSView.extend({
  
  events : {
    'tap' : 'handleTap'
  },
  
  handleTap: function(e) {
    //...
  }
});

```


### Event Bubbling

Due to the, initial, simplistic nature of this extension you'll need to ensure you are implementing `Backbone.HammerJSView` as the element that you are binding events to as by default the HammerJS events will not bubble and trigger on the parent element(s).
