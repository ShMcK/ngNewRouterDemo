/*jshint browser:true */
'use strict';
require('./vendor')();
var appModule = require('index');

angular.element(document).ready(()=> {
  angular.bootstrap(document, [appModule.name], {
    //strictDi: true
  });
});