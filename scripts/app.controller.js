angular
    .module("app")
    .controller("ChatController", ChatController);

function ChatController($scope){
    var vm = this;
    vm.test = "Hello World";
}