class LoginCtrl {
  constructor() {

  }

  canDeactivate() {
    //if (this.sampleText) {
    var alertResult = confirm('You have unsaved changes. Do you want to move away from this page?');
    return alertResult;
    //}
    //return true;
  }
}

export default angular.module('app.form.login', [])
  .controller('LoginController', LoginCtrl);