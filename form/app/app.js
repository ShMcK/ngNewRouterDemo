export default () => {
  return {
    restrict: 'E',
    template: require('./app.html'),
    controller: function ($router) {
      $router.config([{
        path: '/',
        redirectTo: '/blue'
      }, {
        path: '/blue',
        components: {
          primary: 'blue',
          secondary: 'lightBlue'
        }
      }, {
        path: '/red',
        components: {
          primary: 'red',
          secondary: 'ghostWhite'
        }
      }, {
        path: '/orange',
        components: {
          primary: 'orange',
          secondary: 'darkGrey'
        }
      //}, {
      //  path: '/A',
      //  components: {
      //    primary: 'one',
      //    secondary: 'itemA'
      //  }
      //}, {
      //  path: '/B',
      //  components: {
      //    primary: 'one',
      //    secondary: 'itemB'
      //  }
      //}, {
      //  path: '/C',
      //  components: {
      //    primary: 'one',
      //    secondary: 'itemC'
      //  }
      }]);
    }
  };
};