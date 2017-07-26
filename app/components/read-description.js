import Ember from 'ember';

export default Ember.Component.extend({
  show: false,
  actions: {
    showDescription() {
      this.set('show', true);
    },
    hideDescription() {
      this.set('show', false);
    }
  }
});
