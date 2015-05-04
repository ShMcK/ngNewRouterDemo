class LoginCtrl {
  constructor() {
    this.user = {};
  }
}

export default angular.module('app.form.login', [])
  .controller('LoginController', LoginCtrl);