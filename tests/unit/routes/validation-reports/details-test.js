import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | validation-reports/details', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:validation-reports/details');
    assert.ok(route);
  });
});
