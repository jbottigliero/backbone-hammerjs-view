(function(){
  
  'use strict';

  test('$el.data(\'hammer\')', function(){

    expect(1);

    var view = new Backbone.HammerJSView();

    view.setElement(document.createElement('div'));

    ok(
      view.$el.data('hammer') !== 'undefined',
      'Hammer instance was found on the view element.'
    );
  });


  test('tap', function(){

    expect(1);

    var view = new Backbone.HammerJSView({
      events: {
        tap: function(){ ok(true); }
      }
    });

    view.setElement(document.createElement('div'));

    view.$el.trigger('tap');
  });

  test('swipeup', function(){

    expect(2);

    var view = new Backbone.HammerJSView({
      
      hammerjs: {
        recognizers: [
          [Hammer.Swipe, { direction: Hammer.DIRECTION_UP }]
        ]
      },

      events: {
        swipeup   : function() { ok(true, 'The swipeup event was fired.'); }
      }
    });

    view.setElement(document.createElement('div'));
    
    equal(
      view.$el.data('hammer').get('swipe').options.direction,
      Hammer.DIRECTION_UP
    );

    view.$el.trigger('swipeup');
  });

  test('.extend', function(){

    expect(1);

    console.log(Backbone.HammerJSView, Backbone.View);

    var View = Backbone.HammerJSView.extend({
      events: {
        tap: function() { ok(true); }
      }
    });

    var view = new View({
      el: document.createElement('div')
    });

    view.$el.trigger('tap');

  });


})();