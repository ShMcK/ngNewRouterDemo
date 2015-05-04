'use strict';

export default angular.module('app', [
  /* ng Modules */
  'ngNewRouter',
  'ngAnimate',

  /* modules */
  require('./components/nav/nav').name
])
  .directive('app', require('./app'));

