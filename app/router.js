import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('donors');
  this.route('listings', function() {
    this.route('new');
  });
  this.route('login');
  this.route('about');
  this.route('signup');
  this.route('recipients');

  this.route('users', function() {
    this.route('user', { path: '/:user_id' });
  });
});

export default Router;
