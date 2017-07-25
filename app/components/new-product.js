import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
      title: this.get('title'),
      description: this.get('description'),
      venue: this.get('venue'),
      image: this.get('image'),
      latitude: this.get('latitude'),
      longitude: this.get('longitude')
    };
    this.sendAction('save', params);
    }
  }
});
