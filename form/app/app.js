export default () => {
  return {
    restrict: 'E',
    template: require('./app.html'),
    controller: function ($router) {
      $router.config([{
        path: '/',
        redirectTo: '/1'
      }, {
        path: '/1',
        component: 'login'
      }, {
        path: '/2',
        component: 'about'
      }, {
        path: '/3',
        component: 'age'
      }, {
        path: '/complete',
        component: 'end'
      }]);
    }
  };
};