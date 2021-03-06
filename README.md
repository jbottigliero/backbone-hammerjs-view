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


#### Using a non-Hammer.defaults Hammer.Recognizer

Options are passed from the view's `hammerjs` property and bound to the view's element using the Hammer.JS [jQuery plugin](https://github.com/hammerjs/jquery.hammer.js).

```javascript

var SwipeableView = Backbone.HammerJSView.extend({

  hammerjs: {
    recognizers: [
      [Hammer.Swipe, { direction: Hammer.DIRECTION_UP }]
    ]
  },

  events : {
    'swipeup' : 'handleSwipeUp'
  },

  handleSwipeUp: function(e) {
    //...
  }

});

```



### Event Bubbling

Due to the, initial, simplistic nature of this extension you'll need to ensure you are implementing `Backbone.HammerJSView` as the element that you are binding events to as by default the HammerJS events will not bubble and trigger on the parent element(s).

#### Example

```javascript
  var ChildView = Backbone.View.extend({
    tagName: 'h1',
    className: 'child',
    render: function() {
      this.$el.text('You can\'t tap me!');
      return this;
    }
  });
    
  var TappableChildView = Backbone.HammerJSView.extend({
    tagName: 'h1',
    className: 'tappable-child',
    render: function() {
      this.$el.text('You CAN tap me!');
      return this;
    }
  });

  var ParentView = Backbone.View.extend({
    
    tagName: 'section',
    className: 'container',
    
    events: {
      'tap .tappable-child' : 'handleChildTap',
      'tap .child'          : 'handleChildTap'
    },
    
    handleChildTap: function(e) {
      console.log('The ' + e.type + ' event bubbled as expected!');
    },
    
    render: function() {
      this.$el.append(
        (new TappableChildView()).render().$el,
        (new ChildView()).render().$el
      );
      return this;
    }
  });

  $('body').append(
    (new ParentView()).render().$el
  );
```
