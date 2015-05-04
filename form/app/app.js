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
        components: {
          form: 'login'
        }
      }, {
        path: '/2',
        components: {
          form: 'age'
        }
      }, {
        path: '/3',
        components: {
          form: 'about'
        }
      }, {
        path: '/complete',
        components: {
          form: 'end'
        }
      }]);
    }
  };
};