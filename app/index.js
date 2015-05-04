'use strict';

export default angular.module('app', [
  /* ng Modules */
  'ngNewRouter',
  //'ngAnimate', // some error

  /* modules */
  //require('./services/services').name,
  require('./components/nav/nav').name,
  require('./components/one/one').name,
  require('./components/two/two').name,
  require('./components/three/three').name,
  require('./components/item-a/itemA').name,
  require('./components/item-b/itemB').name,
  require('./components/item-c/itemC').name
])
  .directive('app', require('./app'))
  .directive('routerConventions', require('./components/routerConventions/defaults'));

