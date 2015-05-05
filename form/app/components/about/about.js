class AboutCtrl {
  constructor(UserService) {
    this.User = UserService;
  }
}
AboutCtrl.$inject = ['AboutCtrl'];
AboutCtrl.prototype.canDeactivate = function () {

  // save
  this.User.save(this.form);
  // true = continue
  return true;
};

export default angular.module('app.form.about', [])
  .controller('AboutController', ['UserService', AboutCtrl]);