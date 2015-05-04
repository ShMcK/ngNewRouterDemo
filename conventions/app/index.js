'use strict';

export default angular.module('app', [
  /* ng Modules */
  'ngNewRouter',

  /* modules */
  //require('./services/services').name,
  require('./components/nav/nav').name,
  require('./components/red/red').name,
  require('./components/orange/orange').name,
  require('./components/blue/blue').name,
  require('./components/light-blue/lightBlue').name,
  require('./components/ghost-white/ghostWhite').name,
  require('./components/dark-grey/darkGrey').name
])
  .directive('app', require('./app'))
  .directive('routerConventions', require('./components/routerConventions/defaults'));

