import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ValidationReportsDetailsRoute extends Route {
  @service store;
  model(params) {
    return this.store.findRecord('validation-report', params.id);
  }
}
