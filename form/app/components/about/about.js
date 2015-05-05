class AboutCtrl {
  constructor(UserService) {
    this.user = UserService.user;
  }
}
AboutCtrl.$inject = ['UserService'];
AboutCtrl.prototype.canActivate = function () {
  console.log(this.user.username);
  if (!this.user.username) {
    // route user to start of form if form not complete so far
    alert('Please start the form from the beginning.');
    return false;
  }
  return true;
};

export default angular.module('app.form.about', [])
  .controller('AboutController', ['UserService', AboutCtrl]);