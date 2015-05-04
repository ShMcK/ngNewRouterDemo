export default () => {
  return {
    restrict: 'E',
    template: `<ng-viewport></ng-viewport>`,
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