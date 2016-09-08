import Ember from 'ember';
let { Service, Evented } = Ember;

export default Service.extend(Evented, {
  show(component, model, opener) {
    this.trigger('show', component, model, opener);
  },
  hide() {
    this.trigger('hide');
  }
});
