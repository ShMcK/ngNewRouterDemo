class LoginCtrl {
  constructor(UserService) {
    this.User = UserService;
  }
}
LoginCtrl.$inject = ['UserService'];
LoginCtrl.prototype.canDeactivate = function () {

  if (!this.form.terms) {
    this.form.terms = confirm('Do you accept the terms & conditions.');
    if (!this.form.terms) {
      // still false = stay
      return false;
    }
  }

  // save
  this.User.save(this.form);
  // true = continue
  return true;
};

export default angular.module('app.form.login', [])
  .controller('LoginController', ['UserService', LoginCtrl]);