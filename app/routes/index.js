import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  resetController(controller) {
    controller.reset();
  }
}
