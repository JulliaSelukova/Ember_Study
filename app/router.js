import EmberRouter from '@ember/routing/router';
import config from 'ember-study/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('speaker', { path: '/speakers' });
  this.route('book', { path: '/books' });
  this.route('edit-book', { path: 'edit-book/:id' });
  this.route('edit-speaker', { path: 'edit-speaker/:id' });
  this.route('create-speaker');
  this.route('create-book');
});
