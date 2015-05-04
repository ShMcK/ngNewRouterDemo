class UserService {
  constructor() {
    this.user = {};
  }

  save(updates) {
    if (updates.length) {
      updates.forEach((update)=> {
        var key = Object.keys(update);
        this.user[key] = update[key];
      });
    }
  }
}

export default angular.module('app.services.user', [])
  .service('UserService', UserService);