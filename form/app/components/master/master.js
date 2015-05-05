function masterForm(){
  return {
    template: `
      <div class="well">
          <label>Master Form</label><br>
          {{vm.user | json}}
        </div>
    `,
    controller: function (UserService) {
      var vm = this;
      vm.user = UserService.user;
    },
    controllerAs: 'vm'
  };
}


export default angular.module('app.form.master', [])
  .directive('masterForm', ['UserService', masterForm]);