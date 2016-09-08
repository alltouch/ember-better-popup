import Ember from 'ember';

export default Ember.Component.extend({
  betterPopup: Ember.inject.service(),

  classNames: ['better-popup'],

  compName: undefined,
  model: undefined,
  opener: undefined,

  didInsertElement() {
    this.get('betterPopup')
        .on('show', this, 'showPopup')
        .on('hide', this, 'hidePopup');
  },

  willDestroyElement() {
    this.get('betterPopup')
        .off('show', this, 'showPopup')
        .off('hide', this, 'hidePopup');
  },

  showPopup(compName, model, opener) {
    this.setProperties({
      compName,
      model,
      opener,
    });
  },

  hidePopup() {
    this.setProperties({
      compName: undefined,
      model: undefined,
      opener: undefined,
    });
  },

  actions: {
    hidePopup() {
      this.hidePopup();
    },
    sendOpener(actionName, ...args){
      let opener = this.get('opener');
      if(!opener){
        console.error("Can't send action while opener is not provided");
        return;
      }
      if(!opener[actionName]){
        console.error("Can't call undefined function");
        return;
      }
      return opener[actionName](...args);
    }
  }
});
