// Generated by CoffeeScript 1.9.3
import DS from 'ember-data';
var Identifier;

Identifier = DS.Model.extend({
  use: DS.attr('string'),
  type: DS.belongsTo('codeable-concept', {embedded: true}),
  system: DS.attr('string'),
  value: DS.attr('string'),
  period: DS.belongsTo('period', {embedded: true}),
  assigner: DS.belongsTo('reference', {embedded: true})
});

export default Identifier;