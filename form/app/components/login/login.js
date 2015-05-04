class LoginCtrl {
  constructor($scope) {
    this.formValid = false;
    $scope.$watch('form.$valid', (newVal) => {
      this.formValid = newVal;
      //this.formValid = true;
    });
  }
  canDeactivate(){
    if (this.formValid) {
      var alertResult = confirm('You have unsaved changes. Do you want to move away from this page?');
      return alertResult;
    }
    return true;
  }
}
LoginCtrl.$inject = ['$scope'];



export default angular.module('app.form.login', [])
  .controller('LoginController', LoginCtrl);