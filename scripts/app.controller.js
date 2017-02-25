(function(){
    'use strict';

    angular
        .module("app")
        .controller("ChatController", ChatController);

    ChatController.$inject = ["chatService"];

    function ChatController(chatService){
        var vm = this;
        vm.message = "New Message";
        vm.messageList = [];
        vm.sendMessage = sendMessage;
        vm.clearMessage = clearMessage;

        function sendMessage(){
            if(vm.message){
                vm.messageList.push(vm.message);
                vm.message = "";
            }
        }

        function clearMessage(){
            vm.message = "";
            var responded = chatService.getMessages().then(function(response){
                vm.messageList.push(response.data);
            });
        }
    }

})();
