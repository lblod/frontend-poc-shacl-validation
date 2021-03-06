import EmberRouter from '@ember/routing/router';
import config from 'shacl-validation/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('validation-reports', function () {
    this.route('details', { path: '/:id' });
  });
});
