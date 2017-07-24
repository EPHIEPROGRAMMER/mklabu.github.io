import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
      title: this.get('title'),
      description: this.get('description'),
        venue: this.get('venue'),
      image: this.get('image')
    };
    this.sendAction('save', params);
    }
  }
});
