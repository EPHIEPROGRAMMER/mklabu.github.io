import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  venue: DS.attr(),
  feedbacks: DS.hasMany('feedback', { async: true }),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});
//the product model with the products attributes
