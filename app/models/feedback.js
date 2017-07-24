import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  comment: DS.attr(),
  author: DS.attr(),
  product: DS.belongsTo('product', { async: true })
});
//this is the feedback modelel with the feedback attributes
