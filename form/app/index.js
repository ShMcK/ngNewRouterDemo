'use strict';

export default angular.module('app', [
  /* ng Modules */
  'ngNewRouter',
  'ngAnimate',

  /* modules */
  require('./components/nav/nav').name,
  require('./components/login/login').name,
  require('./components/about/about').name,
  require('./components/age/age').name
])
  .directive('app', require('./app'));

