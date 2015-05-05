'use strict';

export default angular.module('app', [
  /* ng Modules */
  'ngNewRouter',
  'ngAnimate',

  /* services */
  require('./services/user.service').name,
  /* components */
  require('./components/nav/nav').name,
  require('./components/master/master').name,
  /* states */
  require('./components/login/login').name,
  require('./components/about/about').name,
  require('./components/age/age').name,
  require('./components/end/end').name
])
  .directive('app', require('./app'));

