export default () => {
  return {
    restrict: 'E',
    scope: {
      componentName: '@'
    },
    template: require('./defaults.html'),
    link: function (scope, el, attrs) {

      function snakeCase(name) {
        return name.replace(/([A-Z])/g, function($1){return '-'+$1.toLowerCase();});
      }
      function capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      }

      var path = '/components/' + snakeCase(attrs.componentName) + '/';

      scope.defaults = {
        template: path + snakeCase(attrs.componentName) + '.html',
        ctrl: capitalize(attrs.componentName) + 'Controller',
        ctrlAs: attrs.componentName
      };
    }
  };
};