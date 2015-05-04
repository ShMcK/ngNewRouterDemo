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
        components: {
          primary: 'one',
          secondary: 'itemA'
        }
      }, {
        path: '/two',
        components: {
          primary: 'two',
          secondary: 'itemA'
        }
      }, {
        path: '/three',
        components: {
          primary: 'three',
          secondary: 'itemA'
        }
      }, {
        path: '/A',
        components: {
          primary: 'one',
          secondary: 'itemA'
        }
      }, {
        path: '/B',
        components: {
          primary: 'one',
          secondary: 'itemB'
        }
      }, {
        path: '/C',
        components: {
          primary: 'one',
          secondary: 'itemC'
        }
      }]);
    }
  };
};