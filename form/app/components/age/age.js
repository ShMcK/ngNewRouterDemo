class AgeCtrl {
  constructor(UserService) {
    this.User = UserService;
  }
}
AgeCtrl.$inject = ['UserService'];
AgeCtrl.prototype.canDeactivate = function () {
  // save
  this.User.save(this.form);
  // true = continue
  return true;
};

export default angular.module('app.form.age', [])
  .controller('AgeController', ['UserService', AgeCtrl]);