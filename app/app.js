export default () => {
  return {
    restrict: 'E',
    template: require('./app.html'),
    controller: function ($router) {
      $router.config([{
        path: '/',
        redirectTo: '/one'
      }, {
        path: '/one',
        component: 'one'
      }, {
        path: '/two',
        component: 'two'
      }, {
        path: '/three',
        component: 'three'
      }]);
    }
  };
};