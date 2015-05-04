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
        component: {
          primary: 'one',
          secondary: 'itemA'
        }
      }, {
        path: '/two',
        component: {
          primary: 'two',
          secondary: 'itemA'
        }
      }, {
        path: '/three',
        component: {
          primary: 'three',
          secondary: 'itemA'
        }
      }]);
    }
  };
};