console.log("entry");
angular.module('app', [])
.controller('MainCtrl',function(){
  let vm = this;
  vm.text = 'Hello world!'
})
