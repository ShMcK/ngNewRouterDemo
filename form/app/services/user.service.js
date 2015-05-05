class UserService {
  constructor() {
    this.user = {};
  }

  save(updates) {
    function update(obj) {
      for (var i = 1; i < arguments.length; i++) {
        for (var prop in arguments[i]) {
          var val = arguments[i][prop];
          if (typeof val === 'object') {
            update(obj[prop], val);
          } else {
            obj[prop] = val;
          }
        }
      }
      return obj;
    }
    update(this.user, updates);
  }
}

export default angular.module('app.services.user', [])
  .service('UserService', UserService);