angular
    .module("app")
    .controller("ChatController", ChatController);

ChatController.$inject = ['$scope'];

function ChatController($scope){
    $scope.test = "Hello World";
}