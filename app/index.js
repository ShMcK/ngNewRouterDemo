'use strict';

export default angular.module('app', [
  /* ng Modules */
  'ngNewRouter',
  //'ngAnimate', // some error
  /* modules */
  //require('./services/services').name,
  //require('./components/components').name,
  require('./components/one/one').name,
  require('./components/two/two').name,
  require('./components/three/three').name
])
  .directive('app', require('./routes'));

