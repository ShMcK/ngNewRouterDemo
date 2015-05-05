class LoginCtrl {
  constructor() {
    //this.form.terms = false;
  }
}
LoginCtrl.prototype.canDeactivate = function () {
  if (!this.form.terms) {
    this.form.terms = confirm('Do you accept the terms & conditions.');
    // false = stay
    return this.form.terms;
  }
  // true = continue
  return true;
};

export default angular.module('app.form.login', [])
  .controller('LoginController', LoginCtrl);