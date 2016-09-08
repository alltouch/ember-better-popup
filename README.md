# Ember-better-popup

This addon was created to simplified popups routing code.
Usually we need to write something similar to

```
Ember.Component.extend({
  showPopup: false,
  actions: {
     showPopup(){
        this.set('showPopup', true);
     },
     hidePopup(){
        this.set('showPopup', false);
     }
  }
});
```
and template
```
{{#if showPopup}}
  {{popup-component some=data onClose=(action "hidePopup")}}
{{/#if}}
```
Also problem that this code will be rendered inside the components tree and some styles can be affected(broken).

When using *ember-better-popup* code will be much simplier
include placeholder component somewhere in template
```
{{better-popup}}
```

then just call service method and popup will rendered to placeholder component 

```
Ember.Component.extend({
  betterPopup: Ember.inject.service(),
  actions: {
     showPopup(){
        this.get('betterPopup').show('component.name', { some: model});
     }
  }
});
```

## Installation

* `ember install ember-better-popup`
