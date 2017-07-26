import Ember from 'ember';

export default Ember.Component.extend({
  updateProduct: false,
  actions: {
    updateProductFormShow() {
      this.set('updateProduct', true);
    },
    update(product) {
      var params = {
        title: this.get("title"),
        description: this.get("description"),
        venue: this.get("venue"),
        image: this.get("image"),
        latitude: this.get('latitude'),
        longitude: this.get('longitude')

      };
      this.set('updateProduct', false);
      this.sendAction('update', product, params);
      // debugger;
    }
  }
});
