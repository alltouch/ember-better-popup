# Ember-better-popup

This addon was created to render popups/modals/dialogs in global context/template with less boilerplate code.

# Usage

Put main component somewhere in template

```
//application.hbs
{{better-popup}}
```

then call service method 

```
//component.js
Ember.Component.extend({
  betterPopup: Ember.inject.service(),
  actions: {
     showPopup(){
        this.get('betterPopup').show('component.name', { some: model});
     }
  }
});
```

popup will rendered inside main component

Also we can pass `opener` param and communicate between opener component and popup;

```
//component.js
Ember.Component.extend({
  betterPopup: Ember.inject.service(),
  actions: {
     showPopup(){
        this.get('betterPopup').show('component.name', { some: model}, this);
     }
  },
  someAction(){
    //...
  }
});
```

```
//popup.js
Ember.Component.extend({
  someFunc(){
    var result = this.sendOpener('someAction', params);
    //do something with result
  }
});
```

When popup is not needed any more we should call `onClose`

```
//popup.js
Ember.Component.extend({
  allDone(){
    this.onClose();
  }
});
```

## Installation

* `ember install ember-better-popup`
