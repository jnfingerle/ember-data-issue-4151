/* globals test, module */
import Ember from 'ember';
import DS from 'ember-data';

module('integration ', {});

test('some test', function(assert) {
  const registry = new Ember.Registry();
  registry.register('service:store', DS.Store);
  registry.container().lookup('service:store');
  assert.ok(true);
});
